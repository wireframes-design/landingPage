/* eslint-disable @typescript-eslint/no-unused-vars */
// src/page-section/landing/AboutUsSection.tsx
import { cn } from "@/lib/utils";
import DotPattern from "@/wireframes/backgrounds/pattern/dot-pattern";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";

const AboutUsSection: React.FC = () => {
  const AboutUs = () => {
    return (
      <div className="flex flex-col justify-center items-center">
      
        <div className="container mx-auto px-4 py-4 mb-10">
          <header className="text-center md:text-start mb-8 px-4 sm:my-10 text-wrap">
            <BlurIn
              word={`About Us`}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold text-accent"
            />
          </header>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 flex justify-start items-center px-4 mt-10 lg:mt-0">
              {/* <img
                src={AboutUsImage}
                alt="Left side image"
                className={cn("w-96 h-96 h-auto rounded-lg")}
              /> */}
            </div>
            <div className="flex-2"></div>
            <div className="text-sm md:text-lg text-start text-balance max-w-3xl flex items-center">
              <h5 className="text-sm md:text-lg lg:text-xl font-normal text-start text-black">
            Description

              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <HeroSectionChildren id="about-us" children={<AboutUs />} />;
};

export default AboutUsSection;
