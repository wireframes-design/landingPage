import React, { useState } from "react";
import whyUsData from "@/datasets/why-us.json";
import "@/index.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTheme } from "@/wireframes/theme/theme-provider";

import { Button } from "@/components/ui/button";

import DrawerDialogDemo from "@/page-sections/blogs/carousel-blogs/blogsModal";
import BlurIn from "@/wireframes/text-animations/blur-in";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";

const WhyUsCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [open, setOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setSelectedBlogId(id);
    setOpen(true);
  };

  const { theme } = useTheme();

  const title = (
    <h1 id="why" className="font-normal  text-center md:text-start mt-10">
      <BlurIn
        word="Why Project?"
        className="text-1xl text-center md:text-start font-bold px-4 md:px-4 lg:px-4 text-accent"
      />
    </h1>
  );

  return (
    <>
    <HeroSectionChildren id="why-vani" style={{minHeight: "20vh" }}>
    <div className="w-full text-wrap px-3">{title}</div>
      
  </HeroSectionChildren>
  <Carousel
        plugins={[plugin.current]}
        className="min-w-full max-w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {whyUsData.map((data, index) => (
            <CarouselItem key={index}>
              <div className="">
                <div className="flex justify-start w-full">
                  <div className="relative overflow-hidden w-full h-[40vh] sm:h-1/2 md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
                    <img
                      src={
                        theme === "dark" ? data.image : data.image
                      }
                      alt="Slider Background Image"
                      className="w-full h-[40vh] md:h-full object-fill sm:object-cover"
                    />
                    {!data.isImageOnly && (
                      <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-5 rounded-lg shadow-md backdrop-blur-sm w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 text-white text-start">
                        {/* <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
                          {data.title}
                        </h2> */}
                        {/* <p className="text-sm md:text-base lg:text-lg mt-3">
                          {data.short_description.substring(0, 350)}
                          {data.short_description.length > 350 ? "..." : ""}
                        </p> */}
                        <Button
                          className="bg-foreground mt-3 hover:bg-foreground"
                          onClick={() => handleButtonClick(data.id)}
                        >
                          <span className="text-background">Learn More</span>
                        </Button>
                        <DrawerDialogDemo
                          open={open}
                          setOpen={setOpen}
                          blogId={selectedBlogId}
                          classNameImage="w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

</>

  );
};

export default WhyUsCarousel;
