import React from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";
import Marquee from "@/wireframes/components/marquee";
import { cn } from "@/lib/utils";

const ClientSlider: React.FC<object> = () => {
  const { theme } = useTheme();

  // const themeBgClass = theme === "dark" ? "bg-black" : "bg-white";
  // const themeTextClass = theme === "dark" ? "text-white" : "text-black";

  const companyList = [
    {
      id: 1,
      name: "1",
      imgLight: "/projectLogo.png",
      imgDark: "/projectLogo.png",
    },
    {
      id: 2,
      name: "2",
      imgLight: "/projectLogo.png",
      imgDark: "/projectLogo.png",
    },
    {
      id: 3,
      name: "3",
      imgLight: "/projectLogo.png",
      imgDark: "/projectLogo.png",
    },
    {
      id: 4,
      name: "4",
      imgLight: "/projectLogo.png",
      imgDark: "/projectLogo.png",
    },
  ];

  const CompanyCard = ({
    imgLight,
    imgDark,
  }: {
    imgLight: string;
    imgDark: string;
  }) => {
    const logo = theme === "dark" ? imgLight : imgDark;
    return (
      <div
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-xl transition duration-300",
          "w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
        )}
      >
        <div className="w-full h-20 md:h-12 lg:h-14 xl:h-20 flex justify-center items-center">
          <img
            className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
            alt="company"
            src={logo}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col justify-center items-center`}>
      <div className="w-full">
        <Marquee pauseOnHover className="[--duration:40s] flex items-center">
          {companyList.map((company) => (
            <CompanyCard
              key={company.id}
              imgLight={company.imgLight}
              imgDark={company.imgDark}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientSlider;
