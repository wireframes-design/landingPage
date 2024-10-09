import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import ShineBorder from "@/wireframes/components/shine-border";
import BlurIn from "@/wireframes/text-animations/blur-in";
import { Link } from "react-router-dom";
import blogs from "@/datasets/blogs.json";
import { cn } from "@/lib/utils";

interface BlogsProps {
  className?: string;
}

const Blogs: React.FC<BlogsProps> = ({ className }) => {
  const title = (
    <h1 id="about-us" className="font-normal text-start mt-10">
      <BlurIn
        word="Blogs"
        className="text-1xl font-normal px-4 md:px-4 lg:px-4"
      />
    </h1>
  );

  return (
    <HeroSectionChildren id="blogs">
      <div className="w-full text-wrap wl mb-4 lg:mb-2 px-3">{title}</div>
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <ShineBorder className="flex justify-center items-center text-center shadow-2xl text-2xl font-bold capitalize p-4">
              <Link to={`/blogs/${blog.id}`}>
                <div
                  className={cn(
                    "flex flex-col items-center p-4 w-full text-background",
                    className
                  )}
                >
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-lg max-h-40 w-full object-fill"
                    />
                  )}
                  <h2 className="text-xl text-start capitalize mb-2 mt-3">
                    {blog.title.substring(0, 100)}
                    {blog.title.length > 100 ? "..." : ""}
                  </h2>
                  <div className="flex flex-row justify-between w-full mb-2 mt-3">
                    <h4 className="text-sm mr-4 font-bold">{blog.author}</h4>
                    <h4 className="text-sm font-bold">{blog.date}</h4>
                  </div>
                  <p className="text-sm font-normal text-start">
                    {blog["short_description"].substring(0, 100)}
                    {blog["short_description"].length > 100 ? "..." : ""}
                  </p>
                </div>
              </Link>
            </ShineBorder>
          ))}
        </div>
      </div>
    </HeroSectionChildren>
  );
};

export default Blogs;
