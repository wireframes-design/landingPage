import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import ChatSection from "@/components/ui/chat-section";
import { Button } from "@/components/ui/button";

const ChatBotIcon: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="fixed bottom-20 right-4 outline outline-foreground outline-1 rounded-full">
      <Button
        variant="outline"
        size={"sm"}
        className=" p-4 h-19 rounded-full"
        onClick={toggleChat}
      >
        <FaRobot size="2rem" />
      </Button>
      {isChatOpen && (
        <div className="absolute bottom-20 right-0 bg-background border border-foreground rounded-sm shadow-lg w-80 h-96">
          <ChatSection />
        </div>
      )}
    </div>
  );
};

export default ChatBotIcon;
