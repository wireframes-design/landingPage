import * as React from "react";
import blogs from "@/datasets/blogs.json";
import BlurIn from "@/wireframes/text-animations/blur-in";
import { cn } from "@/lib/utils";

interface CaroselBlogDetailsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  blogId?: number | null;
}

const CaroselBlogDetails: React.FC<CaroselBlogDetailsProps> = ({ blogId }) => {
  const blogData = blogs.find((blog) => blog.id === blogId);
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen px-4">
        {blogData ? (
          <div className="container mx-auto px-4 py-4 mb-10 mt-20">
            <header className="text-start mb-8 px-4 sm:my-10 text-wrap">
              <BlurIn
                word={`${blogData.title}`}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold"
              />
            </header>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 flex justify-start items-center px-4 mt-10 lg:mt-0">
                <img
                  src={blogData.image}
                  alt="Left side image"
                  className={cn("max-w-full max-h-80 h-auto rounded-lg")}
                />
              </div>
              <div className="flex-1">
                <div className="text-start mb-8 px-4">
                  <h5 className="text-md md:text-1xl lg:text-2xl font-normal mb-4">
                    {blogData.short_description}
                  </h5>
                </div>
                <section className="mb-10 px-4">
                  <div
                    className="text-sm md:text-lg text-start text-balance max-w-3xl"
                    dangerouslySetInnerHTML={{ __html: blogData?.description }}
                  />
                </section>
              </div>
            </div>
          </div>
        ) : (
          <p>No blog data available</p>
        )}
      </section>
    </>
  );
};

export default CaroselBlogDetails;
