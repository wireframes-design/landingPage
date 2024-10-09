import React from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";
const HeroSection: React.FC<{
  id: string;
  title: string;
  description: string;
}> = ({ id, title, description }) => {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      className={`flex flex-col justify-center items-center h-screen px-4 bg-${theme}-bg text-${theme}-text`}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-9">{title}</h2>
        <p className="mt-4 text-lg">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
