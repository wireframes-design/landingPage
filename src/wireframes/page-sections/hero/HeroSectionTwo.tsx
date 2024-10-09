import React from 'react';
import { useTheme } from '@/wireframes/theme/theme-provider';

interface HeroSectionProps {
  id?: string;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
  title?: React.ReactNode;
}

const HeroSectionTwo: React.FC<HeroSectionProps> = ({ id, leftChild, rightChild, title }) => {
  const { theme } = useTheme();

  return (
    <section id={id} className={`justify-center items-center min-h-screen px-4 md:px-8 lg:px-16 bg-${theme}-bg text-${theme}-text py-2 md:py-8`}>
     
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
        {title && (
        <div className="text-wrap w-full mb-4 lg:mb-2">
          {title}
        </div>
      )}
          {leftChild}
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right mt-4 md:mt-0 px-4 md:px-8">
          {rightChild}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
