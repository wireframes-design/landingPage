import React, { useState } from "react";
import Chatbot from "@/assets/chatbot-avatar.gif";
import "@/index.css";
import Chat from "@/page-sections/chatbot/chat";

const ChatbotFloatingBtn: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-0 right-2 " style={{ zIndex: 2 }}>
      <img
        src={Chatbot}
        alt="ChatBot"
        className="rounded-full w-28 h-26 pb-0 mb-0"
        onClick={toggleChat}
      />
      {isChatOpen && (
        <div
          className="absolute bottom-28 right-0 bg-background border border-foreground rounded-sm shadow-lg w-80 chatbot-height"
          style={{ zIndex: 2 }}
        >
          <Chat toggleChat={toggleChat} />
        </div>
      )}
    </div>
  );
};

export default ChatbotFloatingBtn;
