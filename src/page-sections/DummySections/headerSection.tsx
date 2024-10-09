/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import DotPattern from "@/wireframes/backgrounds/pattern/dot-pattern";
import HeroSectionWithProps from "@/wireframes/page-sections/hero/HeroSectionWithProps";
import { useTheme } from "@/wireframes/theme/theme-provider";

const HeaderSection: React.FC = () => {
  const { theme } = useTheme();

  const marqueeList = [
    {
      id: "1",
      name: "client_1",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "2",
      name: "client_2",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "3",
      name: "client_3",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "4",
      name: "client_4",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "5",
      name: "client_5",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "6",
      name: "client_6",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "7",
      name: "client_7",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "8",
      name: "client_8",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "9",
      name: "client_9",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
    {
      id: "10",
      name: "client_10",
      imgLight: "/client-logo/light-logo/light.jpeg",
      imgDark: "/client-logo/dark-logo/dark.jpeg",
    },
  ];

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
  const MarqueeCardComponent = ({
    imgLight,
    imgDark,
  }: {
    imgLight: string;
    imgDark: string;
  }) => {
    const logo = theme === "dark" ? imgLight : imgDark;
    return (
      <div className="w-full h-20 md:h-12 lg:h-14 xl:h-20 flex justify-center items-center">
        <img
          className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
          alt="company"
          src={logo}
        />
      </div>
    );
  };
  return (
    <HeroSectionWithProps
      id="hero"
      title="Contact Us"
      description="Discover unparalleled growth opportunities with Vani. Become a part of our dynamic, tech-driven team poised to shape the digital landscape. We invite ambitious minds to collaborate, innovate, and prosper together as we craft the future. Join us in shaping tomorrow's technology today."
      marqueeList={marqueeList ? marqueeList : []}
      MarqueeCardComponent={MarqueeCardComponent}
      PatternComponent={PatternComponent}
    />
  );
};

export default HeaderSection;
