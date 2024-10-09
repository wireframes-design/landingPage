/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import services from "@/datasets/services.json";
import HeroSectionWithProps from "@/wireframes/page-sections/hero/HeroSectionWithProps";
import { useEffect } from "react";
import DotPattern from "@/wireframes/backgrounds/pattern/dot-pattern";
import { useTheme } from "@/wireframes/theme/theme-provider";

const ServiceDetails: React.FC = () => {
  let { slug } = useParams<{ slug: string }>();
  const service = services.find((service) => service?.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="text-center justify-center items-center">
        Service not found
      </div>
    );
  }

  const { theme } = useTheme();

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
      // <div
      //   className={cn(
      //     "relative cursor-pointer overflow-hidden rounded-xl transition duration-300",
      //     "w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
      //   )}
      // >
      <div className="w-full h-20 md:h-12 lg:h-14 xl:h-20 flex justify-center items-center">
        <img
          className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
          alt="company"
          src={logo}
        />
      </div>
      // </div>
    );
  };

  return (
    <HeroSectionWithProps
      id="service-slug"
      title={service.name ? service.name : "Service not found"}
      description={
        service.description ? service.description : "Service not found"
      }
      marqueeList={service.marqueeList ? service.marqueeList : []}
      PatternComponent={PatternComponent}
      MarqueeCardComponent={MarqueeCardComponent}
    />
  );
};

export default ServiceDetails;
