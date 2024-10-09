import React from "react";
import { FaLaptopCode, FaGlobe } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { LuGlobe2 } from "react-icons/lu";
import { SiBlockchaindotcom } from "react-icons/si";
import { GrHostMaintenance } from "react-icons/gr";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import ShineBorder from "@/wireframes/components/shine-border";
import BlurIn from "@/wireframes/text-animations/blur-in";
import { Link } from "react-router-dom";
import services from "@/datasets/services.json";

// const iconsMap = {
//   FaBeer,
// };

export const servicesIcon = [
  {
    id: "1",
    name: "Web Application",
    slug: "web-application",
    icon: <FaLaptopCode size={"5rem"} />,
  },
  {
    id: "2",
    name: "Blockchain Application",
    slug: "blockchain-application",
    icon: <SiBlockchaindotcom size={"5rem"} />,
  },
  {
    id: "3",
    name: "Mobile Application",
    slug: "mobile-application",
    icon: <MdDeveloperMode size={"5rem"} />,
  },
  {
    id: "4",
    name: "Server Hosting",
    slug: "server-hosting",
    icon: <FaGlobe size={"5rem"} />,
  },
  {
    id: "5",
    name: "SEO Services",
    slug: "seo-services",
    icon: <LuGlobe2 size={"5rem"} />,
  },
  {
    id: "6",
    name: "Maintenance Support",
    slug: "maintenance-support",
    icon: <GrHostMaintenance size={"5rem"} />,
  },
];

const Services: React.FC = () => {
  const title = (
    <h1 id="about-us" className="font-normal text-start mt-10">
      <BlurIn
        word="Our Services"
        className="text-1xl font-normal px-4 md:px-4 lg:px-4"
      />
    </h1>
  );

  return (
    <HeroSectionChildren id="services">
      <div className="w-full text-wrap wl mb-4 lg:mb-2 px-3">{title}</div>
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            // <>
            // {servicesIcon.map((icons) => (
            // <div>
            <ShineBorder
              className="flex justify-center items-center text-center text-2xl font-bold capitalize p-4"
              color={
                [
                  `hsl(var(--shine-border-one))`,
                  `hsl(var(--shine-border-two))`,
                  `hsl(var(--shine-border-three))`,
                ] as Array<string>
              }
            >
              <Link to={`/services/${service.slug}`}>
                <div className="flex flex-col items-center p-4 w-full text-foreground">
                  {/* {icons.icon} */}
                  <h2 className="text-2xl capitalize mb-2 mt-3">
                    {service?.name}
                  </h2>
                  <p className="text-sm font-normal text-start">
                    {service["short_description"].substring(0, 100)}
                    {service["short_description"].length > 100 ? "..." : ""}
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

export default Services;
