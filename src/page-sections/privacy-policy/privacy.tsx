import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import GradualSpacing from "@/wireframes/text-animations/gradual-spacing";
import privacyPolicyContent from "@/datasets/privacy-policy.json";

const PrivacyPolicy: React.FC = () => {
  const policyData = privacyPolicyContent[0]?.policies || "";

  return (
    <HeroSectionChildren id="privacy-policy" className="md:px-0 lg:px-0">
     
      <div className={` pb-10  rounded mb-4`}>
        <header className={`text-start mb-8 sm:my-10`}>
          <GradualSpacing
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-wrap text-start leading-normal font-bold mt-10 md:mt-8 text-accent"
            text={"Privacy Policy"}
          />
        </header>
        <section className="mb-10">
          <div
            className="text-base text-start text-balance text-black"
            dangerouslySetInnerHTML={{ __html: policyData }}
          />
        </section>
      </div>
    </HeroSectionChildren>
  );
};

export default PrivacyPolicy;
