/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";

import { useTranslation } from "react-i18next";
import IconCloudLib from "@/wireframes/components/icon-cloud";
import BlurIn from "@/wireframes/text-animations/blur-in";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";

const WeWorkOnPage: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const RightChild = (
    <div className="relative flex h-full w-full max-w-[48rem] items-center justify-center overflow-hidden rounded-lg px-15 mb-10">
      <IconCloudLib iconSlugs={slugs} />
    </div>
  );
  const LeftChild = (
    <div className="mb-5">
      <p className="text-sm md:text-lg lg:text-lg font-normal text-start">
        We are a one-stop solution for all your IT related doubts and problem.
        Be it a website for your business or a mobile application or be it some
        core server related technical issue we are here to assist you with
        anything. Our team is technically sound and experienced to deal with any
        challenges you face in your business. We have a wide range of services
        to offer and some elegant products for our customers.
      </p>
    </div>
  );

  const title = (
    <h1 id="about-us" className="font-normal">
      <BlurIn word="Our Expertise" className={`text-1xl font-normal mt-10`} />
    </h1>
  );

  return (
    <HeroSectionChildren id="we-work">
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
          {title && (
            <div className="text-wrap text-left w-full mb-4 lg:mb-2">
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

export default WeWorkOnPage;
