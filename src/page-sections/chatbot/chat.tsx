import React, { useState, useEffect, FormEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import "@/index.css";
import ProfileIcon from "@/assets/images/logo/logo-eye.webp";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import Loader from "@/components/ui/loader";
import ChatbotNavbar from "@/components/ui/chatbot/chatbotNavbar";
import { Button } from "@/components/ui/button";
import { firestore } from "@/firebase/firebaseConfig";
import useChatbotBackend from "@/api/firebase/core/chatbot/useChatbotBackend";

interface ChatProps {
  toggleChat: () => void;
}

interface DisplayMessage {
  text: string;
  type: "PROMPT" | "RESPONSE";
  createTime: any;
}

const Chat: React.FC<ChatProps> = ({ toggleChat }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [responses, setResponses] = useState<DisplayMessage[]>([]);
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(
      collection(firestore, "discussions"),
      orderBy("createTime", "asc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setIsLoading(true);
      const updatedResponses: DisplayMessage[] = [];
      querySnapshot.forEach((doc) => {
        const { prompt, response, createTime } = doc.data();
        updatedResponses.push(
          { text: prompt, type: "PROMPT", createTime },
          { text: response, type: "RESPONSE", createTime }
        );
      });

      if (updatedResponses.length === 0) {
        updatedResponses.push({
          text:
            "I'm a chatbot powered by the kaliba and built with React.",
          type: "RESPONSE",
          createTime: serverTimestamp(),
        });
      }

      console.log("Response before", responses.length);
      console.log("Updated Response before", updatedResponses.length);

      if (responses.length <= updatedResponses.length) {
        setResponses(updatedResponses);
        setIsLoading(false);
      }
      console.log("Response", responses.length);
      console.log("Updated Response", updatedResponses.length);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [responses]);

  const { createChat } = useChatbotBackend();
  const submitPrompt = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!prompt) return;
    setStatus("Sure, one sec...");
    try {
      const chat = await createChat(prompt);
      if (chat.success) {
        setStatus("Please wait for the reply.");
        setIsLoading(false);
      } else {
        setStatus("Something went wrong. Please try again");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setStatus("Oh no! Something went wrong. Please try again.");
      setIsLoading(false);
    }

    setPrompt("");
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleCloseChat = () => {
    setResponses([]);
    toggleChat();
  };
  return (
    <div
      className={`flex flex-col h-full ${
        isFullScreen ? "fixed inset-0 z-2 bg-background" : ""
      }`}
    >
      <ChatbotNavbar
        src={ProfileIcon}
        title="Chatbot"
        onClick={toggleFullScreen}
        isFullScreen={isFullScreen}
        handleCloseChat={handleCloseChat}
      />

      <div
        className="flex-1 overflow-y-auto mb-4 px-4 element-with-custom-scrollbar mt-4"
        ref={containerRef}
      >
        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            {responses.map((resp, index) => (
              <div
                key={index}
                className={resp.type === "PROMPT" ? "prompt" : "response"}
              >
                {resp.type !== "PROMPT" && (
                  <div className="w-10 h-10 flex items-center justify-center bg-muted-foreground rounded-full mr-4 mb-1">
                    <img
                      src={ProfileIcon}
                      alt="Profile"
                      className="rounded-full w-7 h-9"
                    />
                  </div>
                )}
                <div
                  className={`inline-block px-4 py-2 rounded-sm text-sm font-normal ${
                    resp.type === "PROMPT"
                      ? "bg-foreground text-background"
                      : "bg-muted"
                  }`}
                >
                  {resp.text}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex px-4 pb-2">
        <Input
          type="text"
          className="flex-1 text-foreground bg-muted outline outline-1 outline-foreground p-2 rounded-l-sm rounded-r-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Message"
          disabled={isLoading}
        />
        <Button
          type="submit"
          className="hover:bg-foreground bg-foreground text-background px-3 py-2 rounded-r-sm rounded-l-none outline outline-1 outline-foreground"
          onClick={submitPrompt}
          disabled={isLoading}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
