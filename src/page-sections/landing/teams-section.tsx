import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";
import React from "react";
import teamsData from "@/datasets/teams.json";
import Card from "@/components/card/card";

const TeamsSection: React.FC = () => {
  const title = (
    <h1 id="our-teams" className="font-normal  text-center md:text-start mt-10">
      <BlurIn
        word="Team"
        className="text-1xl text-center md:text-start font-bold px-4 md:px-4 lg:px-4 text-accent"
      />
    </h1>
  );

  return (
    <HeroSectionChildren id="our-teams">
      <div className="w-full text-wrap  wl mb-4 lg:mb-2 px-3">{title}</div>
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {teamsData.map((team) => (
            <Card className="w-full text-foreground border-accent bg-background rounded-3xl">
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
                <p className="text-2xl text-accent">{team.name}</p>
                <p className="text-sm">{team.profession}</p>
                <p className="text-sm font-normal text-start mt-2">
                  {team.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </HeroSectionChildren>
  );
};

export default TeamsSection;
