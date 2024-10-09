/* eslint-disable @typescript-eslint/no-unused-vars */
// src/page-section/landing/HeaderSection.tsx
import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";

import Avatar from "@/assets/images/avatar/avatar1.png";
import WordRotate from "@/wireframes/text-animations/word-rotate";

const HeaderSection: React.FC = () => {
  const Header = () => {
    return (
      <div
        className={`justify-center items-center md:px-8 lg:px-16  py-2 md:py-8`}
      >
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
          <div
            className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8 "
            style={{ zIndex: 5 }}
          >
            <BlurIn
              word={`Building a Portfolio of Digital Excellence`}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold text-black"
            />
            {/* <WordRotate
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-2 font-bold text-accent dark:text-accent"
              words={["English", "Hindi", "Spanish", "Deutsch", "French"]}
            /> */}
          </div>
          <div
            className="w-full md:w-1/2 text-center md:text-right mt-4 md:mt-0 px-4 md:px-8 flex justify-center items-center"
            style={{ zIndex: 5 }}
          >
            <img className="w-99 h-99" alt="company" src={Avatar} />
          </div>
        </div>
      </div>
    );
  };

  return <HeroSectionChildren id="home" children={<Header />} />;
};

export default HeaderSection;
