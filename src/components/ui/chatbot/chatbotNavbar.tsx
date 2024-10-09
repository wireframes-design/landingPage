import React from "react";
import "@/index.css";
import { Button } from "@/components/ui/button";
import { RxCrossCircled } from "react-icons/rx";
import { FiMaximize, FiMinimize } from "react-icons/fi";

interface ChatBotNavabarProps {
  src?: any;
  title?: string;
  onClick?: any;
  handleCloseChat?: any;
  isFullScreen?: any;
}
const ChatbotNavbar: React.FC<ChatBotNavabarProps> = ({
  src,
  title,
  onClick,
  handleCloseChat,
  isFullScreen,
}) => {
  return (
    <div className="sticky top-0 z-2 flex items-center p-2 bg-muted text-foreground border-b border-foreground mb-2 rounded-tr-lg rounded-tl-lg">
      <div className="w-12 h-12 flex items-center justify-center bg-muted-foreground rounded-full mr-4">
        <img src={src} alt="Profile" className="rounded-full w-9 h-10" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <Button
        onClick={onClick}
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
  );
};

export default ChatbotNavbar;
