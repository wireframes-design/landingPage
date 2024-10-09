import React, { useState, useEffect, FormEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "@/index.css";
import ProfileIcon from "@/assets/images/logo/logo-eye.webp";
import { RxCrossCircled } from "react-icons/rx";

import { FiMaximize, FiMinimize } from "react-icons/fi";

import { initializeApp } from "firebase/app";
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
import Loader from "./loader";

interface ChatSectionProps {
  toggleChat: () => void;
}

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

interface DisplayMessage {
  text: string;
  type: "PROMPT" | "RESPONSE";
  createTime: any;
}

const ChatSection: React.FC<ChatSectionProps> = ({ toggleChat }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [responses, setResponses] = useState<DisplayMessage[]>([
   
  ]);
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
            "I'm a chatbot powered by the Kaliba Enterprises and built with React.",
          type: "RESPONSE",
          createTime: serverTimestamp(),
        });
      }

      console.log("Response before", responses.length);
      console.log("Updated Response before", updatedResponses.length);

      if(responses.length <= updatedResponses.length){

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

  

  const submitPrompt = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 4000)

    if (!prompt) return;
    setStatus("Sure, one sec...");
    try {
      const discussionDocRef = await addDoc(
        collection(firestore, "discussions"),
        {
          prompt,
          createTime: serverTimestamp(),
        }
      );

      // const unsub = onSnapshot(
      //   doc(discussionDocRef),
      //   (docSnap) => {
      //     const conversation = docSnap.data();
      //     if (conversation && conversation.status) {
      //       setStatus("Thinking...");
      //       const state = conversation.status.state;
      //       console.log("state", state)
      //       switch (state) {
      //         case "COMPLETED":
      //           setStatus("");
      //           setResponses((prevResponses) => [
      //             ...prevResponses,
      //             {
      //               text: conversation.response,
      //               type: "RESPONSE",
      //               createTime: conversation.createTime,
      //             },
      //           ]);
      //           console.log("inside complete",responses.length)

      //           unsub();
      //           // setIsLoading(false);
      //           break;
      //         case "PROCESSING":
      //           setStatus("Preparing your answer...");
      //           console.log("preparing for data");
      //           break;
      //         case "ERRORED":
      //           setStatus("Oh no! Something went wrong. Please try again.");
      //           unsub();
      //           console.log("ERRORED for data");
      //           // setIsLoading(false);
      //           break;
      //         default:
      //           break;
      //       }
      //     }
      //   },
      //   (error) => {
      //     console.error(error);
      //     setStatus("Oh no! Something went wrong. Please try again.");
      //     // setIsLoading(false);
      //   }
      // );
    } catch (error) {
      console.error(error);
      setStatus("Oh no! Something went wrong. Please try again.");
      // setIsLoading(false);
    }
    setPrompt("");
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleCloseChat = () => {
    setResponses([]); // Clear the chat responses
    toggleChat();
  };
  return (
    <div
      className={`flex flex-col h-full ${
        isFullScreen ? "fixed inset-0 z-2 bg-background" : ""
      }`}
    >
      <div className="sticky top-0 z-2 flex items-center p-2 bg-muted text-foreground border-b border-foreground mb-2 rounded-tr-lg rounded-tl-lg">
        
        <Button
          onClick={toggleFullScreen}
          className="bg-transparent hover:bg-transparent focus:outline-none hover:outline-muted text-foreground p-0 rounded-full shadow-none flex items-center justify-center mr-2"
        >
          {isFullScreen ? (
            <FiMinimize size={"1.5rem"} />
          ) : (
            <FiMaximize size={"1.5rem"} />
          )}
        </Button>
        <Button
          onClick={handleCloseChat}
          className="bg-transparent hover:bg-transparent focus:outline-none hover:outline-none active:outline-none text-foreground p-0 rounded-full shadow-none flex items-center justify-center"
        >
          <RxCrossCircled size={"2rem"} />
        </Button>
      </div>

      <div
        className="flex-1 overflow-y-auto mb-4 px-4 element-with-custom-scrollbar"
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

      {/* <form onSubmit={submitPrompt}> */}
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
      {/* </form> */}
    </div>
  );
};

export default ChatSection;
