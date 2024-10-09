import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import ShineBorder from "@/wireframes/components/shine-border";
import BlurIn from "@/wireframes/text-animations/blur-in";
import teams from "@/datasets/teams.json";
import { Button } from "@/components/ui/button";

const Teams: React.FC = () => {
  const title = (
    <h1 id="about-us" className="font-normal text-start mt-10">
      <BlurIn
        word="Our Teams"
        className="text-1xl font-bold px-4 md:px-4 lg:px-4 text-accent"
      />
    </h1>
  );

  return (
    <HeroSectionChildren id="services">
      <div className="w-full text-wrap wl mb-4 lg:mb-2 px-3">{title}</div>
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {teams.map((team) => (
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
              <div className="flex justify-center">
                <div className="flex justify-center border border-accent rounded-full w-24 h-24 items-center shadow-lg shadow-foreground">
                  <div className="grayscale hover:grayscale-0 ">
                    <img
                      src={team.profileImage}
                      alt={team.name}
                      className="w-20 h-20 rounded-full shadow-lg shadow-cyan-500/50 object-cover"
                    />
                  </div>
                </div>
              </div>
            
              <div className="mt-3 text-black">
                <p className="text-2xl">{team.name}</p>
                <p className="text-sm">{team.profession}</p>
                <p className="text-sm font-normal text-start mt-1">
                  {team.description}
                </p>
              </div>
              <div className="mt-3">
                <Button className="bg-accent text-secondary rounded-full hover:bg-secondary  hover:text-accent">
                  {team.buttonText}
                </Button>
              </div>
              {/* </ShineBorder> */}
            </ShineBorder>
          ))}
        </div>
      </div>
    </HeroSectionChildren>
  );  
};

export default Teams;
