/* eslint-disable @typescript-eslint/no-unused-vars */
// src/page-section/landing/IframeSection.tsx
import { cn } from "@/lib/utils";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";
import YouTubeEmbed from "@/components/iframe/iframe";

const IframeSection: React.FC = () => {
  const Media = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 py-4 mb-10">
          <header className="text-center md:text-start mb-8 px-4 sm:my-10">
            <BlurIn
              word="Media"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold text-accent"
            />
          </header>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
              <div className="w-full h-full aspect-w-16 aspect-h-9">
                <YouTubeEmbed
                  videoId=""
                  width={"100%"}
                />
              </div>
            </div>
            <div className="text-sm md:text-lg text-start max-w-3xl flex items-center">
              <h5 className="text-sm md:text-lg lg:text-xl font-normal text-start text-black">
             
             </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <HeroSectionChildren id="media" children={<Media />} />;
};

export default IframeSection;
