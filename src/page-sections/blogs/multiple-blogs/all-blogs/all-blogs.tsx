import React, { useState } from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import ShineBorder from "@/wireframes/components/shine-border";
import BlurIn from "@/wireframes/text-animations/blur-in";
import multiblogs from "@/datasets/blogs.json";
import DrawerDialogDemo from "@/page-sections/blogs/carousel-blogs/blogsModal";
import BlogHeaderSection from "../../blog-headerSection";

const AllBlogs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setSelectedBlogId(id);
    setOpen(true);
  };

  const title = (
    <h1 id="about-us" className="font-normal text-start mt-20">
      <BlurIn
        word="Blogs"
        className="text-lg font-normal px-4 md:px-4 lg:px-4"
      />
    </h1>
  );
  // console.log("Multiple blog data",multiblogs);
  return (
    <HeroSectionChildren id="blogs" className="md:px-0 lg:px-0">
      <div className="w-full text-wrap wl mb-4 lg:mb-2 px-3">{title}</div>
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {multiblogs?.map((blogs) => (
            <ShineBorder className="flex justify-center items-center text-center shadow-2xl text-2xl font-bold capitalize p-4">
              <div onClick={() => handleButtonClick(blogs.id)}>
                <div className="flex flex-col items-center p-4 w-full text-background">
                  {blogs.image && (
                    <img
                      src={blogs?.image}
                      alt={blogs?.title}
                      className="rounded-lg max-h-40 w-full object-fill"
                    />
                  )}
                  <h2 className="text-xl text-start capitalize mb-2 mt-3">
                    {blogs.title.substring(0, 100)}
                    {blogs.title.length > 100 ? "..." : ""}
                  </h2>
                  <div className="flex flex-row justify-between w-full mb-2 mt-3">
                    <h4 className="text-sm mr-4 font-bold">{blogs.author}</h4>
                    <h4 className="text-sm font-bold">{blogs.date}</h4>
                  </div>
                  <p className="text-sm font-normal text-start">
                    {blogs["short_description"].substring(0, 100)}
                    {blogs["short_description"].length > 100 ? "..." : ""}
                  </p>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
        <DrawerDialogDemo
          open={open}
          setOpen={setOpen}
          blogId={selectedBlogId}
          classNameImage="w-full"
        />
      </div>
    </HeroSectionChildren>
  );
};

export default AllBlogs;
