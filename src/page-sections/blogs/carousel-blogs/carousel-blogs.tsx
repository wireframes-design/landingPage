import React, { useState } from "react";
import blogs from "@/datasets/blogs.json";
import "@/index.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import DefaultLayout from "@/wireframes/layouts/default";
import { useTheme } from "@/wireframes/theme/theme-provider";

import { Button } from "@/components/ui/button";

import DrawerDialogDemo from "@/page-sections/blogs/carousel-blogs/blogsModal";

const CarouselBlogs: React.FC = () => {
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
  return (
    <DefaultLayout>
      <Carousel
        plugins={[plugin.current]}
        className="min-w-full max-w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {blogs.map((blog, index) => (
            <CarouselItem key={index}>
              <div className="">
                <div className="flex justify-start w-full">
                  <div className="relative overflow-hidden w-full h-[40vh] sm:h-1/2 md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
                    <img
                      src={
                        theme === "dark" ? blog.light_image : blog.dark_image
                      }
                      alt="Slider Background Image"
                      className="w-full h-[40vh] md:h-full object-fill sm:object-cover"
                    />
                    {!blog.isImageOnly && (
                      <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-5 rounded-lg shadow-md backdrop-blur-sm w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 text-white text-start">
                        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
                          {blog.title}
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg mt-3">
                          {blog.short_description.substring(0, 350)}
                          {blog.short_description.length > 350 ? "..." : ""}
                        </p>
                        <Button
                        className="bg-foreground mt-3 hover:bg-foreground"
                        onClick={() => handleButtonClick(blog.id)}
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
    </DefaultLayout>
  );
};

export default CarouselBlogs;
