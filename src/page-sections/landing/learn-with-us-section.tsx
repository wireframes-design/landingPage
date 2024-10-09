/* eslint-disable @typescript-eslint/no-unused-vars */
// src/page-section/landing/LearnWithUsSection.tsx
import React from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";

import { useTranslation } from "react-i18next";
// import IconCloudLib from "@/wireframes/components/icon-cloud";
import IconCloudLib from "@/wireframes/components/icon-cloud";
import BlurIn from "@/wireframes/text-animations/blur-in";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";

const LearnWithUsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();


  const slugs = [
    "https://firebasestorage.googleapis.com/v0/b/vani-5456e.appspot.com/o/language%2Fjerman.jpeg?alt=media&token=1168d8a5-184c-470a-a163-99c1b4be5b4a",
    "https://firebasestorage.googleapis.com/v0/b/vani-5456e.appspot.com/o/language%2Fspanish.jpeg?alt=media&token=83c54dac-8d31-4f78-a96c-669d54316904",
    "https://firebasestorage.googleapis.com/v0/b/vani-5456e.appspot.com/o/language%2Fhindi.jpeg?alt=media&token=9626ab2e-ed59-4eaf-9c0f-fba8c3657137",
    "https://firebasestorage.googleapis.com/v0/b/vani-5456e.appspot.com/o/language%2Fenglish.jpeg?alt=media&token=7175e5d0-edc7-4e18-b8ba-da009790284e",
    "https://firebasestorage.googleapis.com/v0/b/vani-5456e.appspot.com/o/language%2Ffrance.jpeg?alt=media&token=c781a42c-e4ed-4057-a7e6-062b2df069c9"

  ];

  const RightChild = (
    <div className="relative flex h-full w-full max-w-[48rem] items-center justify-center overflow-hidden rounded-lg px-15 mb-10">
      <IconCloudLib iconSlugs={slugs} />
    </div>
  );
  const LeftChild = (
    <div className="mb-5">
      <p className="text-sm md:text-lg lg:text-xl font-normal text-start text-black">
      At Vani, we believe that the best way to learn a language is through conversation.
      Our interactive platform allows you to practice speaking, listening, and understanding a new language just as you would in everyday life. 
      Engage in personalized conversations, receive immediate corrections, and track your progress as you build confidence and fluency. 
      Vani’s unique approach ensures that learning is not just educational but also fun and motivating.

      </p>
    </div>
  );

  const title = (
    <h1 id="learn-with-us" className="font-bold text-accent">
      <BlurIn word="Learn With Us" className={`text-1xl font-bold mt-10`} />
    </h1>
  );

  return (
    <HeroSectionChildren id="learn-with-us">
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
          {title && (
            <div className="text-wrap text-center md:text-start w-full mb-4 lg:mb-2">
              {title}
            </div>
          )}
          {LeftChild}
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right mt-4 md:mt-0 px-4 md:px-8">
          {RightChild}
        </div>
      </div>
    </HeroSectionChildren>
  );
};

export default LearnWithUsSection;
