/* eslint-disable @typescript-eslint/no-unused-vars */
// src/page-section/landing/HeaderSection.tsx
import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";

import PortfolioImage from "@/assets/images/networklink/portfolio.png";
import Avatar from "@/assets/images/avatar/avatar1.png";
import TypingAnimation from "@/wireframes/text-animations/typing-animation";
import { Input } from "@/components/ui/input";
import PulsatingButton from "@/wireframes/buttons/pulsating-button";

const HeaderSection: React.FC = () => {
  const Header = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/4">
          <img className="w-80 h-80" alt="company" src={PortfolioImage} />
        </div>
        <div className="w-full md:w-2/4 text-center">
          <TypingAnimation
            className="text-4xl font-bold text-black dark:text-white"
            text="Building a Portfolio of Digital Excellence"
          />
          <p className="text-sm text-gray-600 mt-2 pb-5">
            Empowering brands through innovative digital solutions
          </p>
          <div className="flex justify-center mt-5">
            <div className="flex w-full max-w-sm items-center justify-center space-x-2">
              <Input
                type="email"
                placeholder="your name"
                className="w-full px-4 py-2 border border-accent rounded-xl bg-transparent text-[#009688] placeholder-[#43a047] focus:outline-none focus:ring-2 focus:ring-[#43a047]"
              />

              <PulsatingButton className="rounded-xl w-1/2 text-sm">
                <a className="text-dark hover:text-secondary" href="#">
                  Claim Domain
                </a>
              </PulsatingButton>
            </div>
          </div>
          <div>
            <p className="text-sm mt-3">
              Clain your domain before it's too late.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-right">
          <img className="w-full h-full" alt="company" src={Avatar} />
        </div>
      </div>
    );
  };

  return <HeroSectionChildren id="home" children={<Header />} />;
};

export default HeaderSection;
