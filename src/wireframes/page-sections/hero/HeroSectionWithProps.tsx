import React from "react";
import Marquee from "@/wireframes/components/marquee";
import BlurIn from "@/wireframes/text-animations/blur-in";
import { cn } from "@/lib/utils";

interface MarqueeItem {
  id: string;
  name: string;
  imgLight: string;
  imgDark: string;
}

interface Category {
  technology: string;
  url: string;
}

interface HeroSectionProps {
  id?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  marqueeList: MarqueeItem[];
  PatternComponent: React.FC | null;
  MarqueeCardComponent: React.FC<{ imgLight: string; imgDark: string }>;
  imageRight?: string;
  imageLeft?: string;
  classNameImageRight?: string;
  classNameImageLeft?: string;
  categories?: Category[];
}

const HeroSectionWithProps: React.FC<HeroSectionProps> = ({
  id,
  title,
  subTitle,
  description,
  marqueeList = [],
  PatternComponent = null,
  MarqueeCardComponent,
  imageRight,
  imageLeft,
  classNameImageRight,
  classNameImageLeft,
  categories,
}) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center min-h-screen px-4"
    >
      {PatternComponent != null && <PatternComponent />}
      <div className="container mx-auto px-4 py-4 mb-10 mt-20">
        <header className="text-start mb-8 px-4 sm:my-10 text-wrap">
          <BlurIn
            word={`${title}`}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold"
          />
        </header>
        <div className="flex flex-col lg:flex-row">
          {imageLeft && (
            <div className="flex-1 flex justify-start items-center px-4 mt-10 lg:mt-0">
              <img
                src={imageLeft}
                alt="Left side image"
                className={cn(
                  "max-w-full max-h-80 h-auto rounded-lg",
                  classNameImageLeft
                )}
              />
            </div>
          )}
          <div className="flex-1">
            <div className="text-start mb-8 px-4">
              <h5 className="text-md md:text-1xl lg:text-2xl font-normal mb-4">
                {subTitle}
              </h5>
            </div>
            <section className="mb-10 px-4">
              <div
                className="text-sm md:text-lg text-start text-balance max-w-3xl"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </section>
            {marqueeList.length !== 0 && (
              <div className="w-full px-4">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-full">
                    <Marquee
                      pauseOnHover
                      className="[--duration:40s] flex items-center"
                    >
                      {marqueeList.map((marquee) => (
                        <MarqueeCardComponent
                          key={marquee.id}
                          imgLight={marquee.imgLight}
                          imgDark={marquee.imgDark}
                        />
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            )}
          </div>
          {imageRight && (
            <div className="flex-1 flex justify-center items-center lg:ml-10 mt-10 lg:mt-0">
              <img
                src={imageRight}
                alt="Right side image"
                className={cn(
                  "max-w-full max-h-80 h-auto rounded-lg",
                  classNameImageRight
                )}
              />
            </div>
          )}
        </div>
        {categories && categories.length > 1 && (
          <div className="flex flex-wrap mt-10 px-4">
            {categories.map((category, index) => (
              <a
                key={index}
                // href={category.url}
                className="bg-muted text-center min-w-36 text-foreground rounded-full px-3 py-2 mr-2 mb-2 hover:text-foreground text-sm sm:text-sm"
              >
                {category.technology}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSectionWithProps;
