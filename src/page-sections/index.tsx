/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/Index.tsx
import React from "react";
import DefaultLayout from "@/wireframes/layouts/default";
import GetInTouchPage from "@/page-sections/contact-us/get-in-touch-page";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
// import CarouselBlogs from "./blank/carousel-blogs/carousel-blogs";
import CarouselBlogs from "@/page-sections/blogs/carousel-blogs/carousel-blogs";
import HeaderSection from "./DummySections/headerSection";


const Index: React.FC = () => {
  return (
    <>
      <DefaultLayout header={<Header />} footer={<Footer />}>
        <div className="section-colors">
          <HeaderSection/>
         
        </div>
        <div>
         
        </div>
        <div className="section-colors">
          {/* <WeWorkOnPage /> */}
        </div>
        <div className="section-colors">
          {/* <Services /> */}
        </div>
        <div className="section-colors">
          {/* <Blogs /> */}
          {/* <CarouselBlogs/> */}
        </div>
        <div className="section-colors">
          {/* <TextRevealDemo /> */}
          {/* <GetInTouchPage /> */}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Index;
