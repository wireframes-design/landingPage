import React from "react";
import GradualSpacing from "@/wireframes/text-animations/gradual-spacing";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import termsAndConditions from "@/datasets/terms-conditions.json";

const TermsConditions: React.FC = () => {
  const termsConditionsData = termsAndConditions[0]?.termsAndConditions || "";

  return (
    <HeroSectionChildren id="terms-conditions" className="md:px-0 lg:px-0">
    
      <div className={`pb-10 rounded`}>
        <header className={`text-start mb-8 sm:my-10`}>
          <GradualSpacing
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-wrap text-start leading-normal font-bold mt-10 md:mt-8 text-accent"
            text="Terms and Conditions"
          />
        </header>
        <section className="mb-10">
          <div
            className="text-base text-start text-balance text-black"
            dangerouslySetInnerHTML={{ __html: termsConditionsData }}
          />
        </section>
      </div>
    </HeroSectionChildren>
  );
};

export default TermsConditions;
