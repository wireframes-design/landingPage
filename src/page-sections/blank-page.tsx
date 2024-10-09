import React from "react";
import DefaultLayout from "@/wireframes/layouts/default";
import Blank from "@/page-sections/blank/blank";
import SectionTest from "@/page-sections/blank/section-test";
import CarouselBlogs from "@/page-sections/blogs/carousel-blogs/carousel-blogs";

const BlankPage: React.FC = () => {
  return (
    <>
    {/* <DefaultLayout header={<Header />} footer={<Footer />}></DefaultLayout> */}
      <DefaultLayout>
        <div className="section-colors">
          <Blank />
        </div>
        <div className="section-colors">
          <SectionTest/>
        </div>
        <div className="section-colors">
          <CarouselBlogs/>
        </div>
      </DefaultLayout>
    </>
  );
};

export default BlankPage;
