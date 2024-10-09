/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import React from "react";

const HeroSectionChildren: React.FC<{
  id?: string;
  children?: any;
  className?: string;
  style?: any;
}> = ({ id, children, className, style }) => {
  return (
    <section
      id={id}
      className={cn(
        `flex flex-col justify-center items-center min-h-screen px-4 md:px-8 lg:px-16 `,
        className
      )}
      style={style}
    >
      <div className={`text-center w-full px-4 md:px-8`}>{children}</div>
    </section>
  );
};

export default HeroSectionChildren;
