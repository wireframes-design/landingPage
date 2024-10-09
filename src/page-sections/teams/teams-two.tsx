import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";
import teams from "@/datasets/teams.json";
import { Button } from "@/components/ui/button";
import Card from "@/components/card/card";
import IdentityCard from "@/components/card/indentityCard";

const TeamsTwo: React.FC = () => {
  const title = (
    <h1 id="about-us" className="font-normal text-start mt-10">
      <BlurIn
        word="Our Teams"
        className="text-1xl font-normal px-4 md:px-4 lg:px-4"
      />
    </h1>
  );

  return (
    <HeroSectionChildren id="services">
      <div className="w-full text-wrap wl mb-4 lg:mb-2 px-3">{title}</div>
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {teams.map((team) => (
            <IdentityCard
              profilePicture={team.profileImage}
              name={team.name}
              title={team.profession}
            >
              <p className="text-gray-700">
                This is additional content inside the identity card. You can
                pass any React elements as children to this card component.
              </p>
            </IdentityCard>
          ))}
        </div>
      </div>
    </HeroSectionChildren>
  );
};

export default TeamsTwo;
