/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/HomePage.tsx
import React from "react";
import HeroSectionWithProps from "@/wireframes/page-sections/hero/HeroSectionWithProps";
import DotPattern from "@/wireframes/backgrounds/pattern/dot-pattern";

const SectionTest: React.FC = () => {
  const PatternComponent = () => (
    <DotPattern
      width={20}
      height={20}
      cx={1}
      cy={1}
      cr={1}
      className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
    />
  );

  const MarqueeCardComponent = () => (
    <></>
  );
  return (
    <HeroSectionWithProps
      id="service-slug"
      title={"Service not found"}
      description={"Service not found"}
      marqueeList={[]}
      PatternComponent={PatternComponent}
      MarqueeCardComponent={MarqueeCardComponent}
      imageRight="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
    />
  );
};

export default SectionTest;
