/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/HomePage.tsx
import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import TextReveal from "@/wireframes/text-animations/text-reveal";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSectionChildren id="textR">
        <div className="z-10 flex min-h-[16rem] items-center justify-center bg-white dark:bg-black">
          <TextReveal text="Web Design Mastery: Visuals, UX & Conversions" />
        </div> 
      </HeroSectionChildren>
    </>
  );
};

export default HomePage;
