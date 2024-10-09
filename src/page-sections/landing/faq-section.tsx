/* eslint-disable @typescript-eslint/no-unused-vars */
// src/page-section/landing/FAQSection.tsx
import { cn } from "@/lib/utils";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";
import faqImage from "@/assets/vani/logos/vani-06.png";
import AccordionComponent from "@/components/accordion/accordion-component";

const FAQSection: React.FC = () => {
  const accordionData = [
    {
      title: "Question 1",
      content:
        "answer 1",
    },
    {
      title:
        "Question 2",
      content:
        "answer 2",
    },
    {
      title: "Question 3",
      content:
        "answer 3",
    },
    {
      title: "Question 4",
      content:
        "answer 4",
    },
  ];
  const Faq = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 py-4 mb-10">
          <header className="text-center md:text-start mb-8 px-4 sm:my-10 text-wrap">
            <BlurIn
              word={`FAQ's`}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold text-accent"
            />
          </header>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 flex justify-center items-center px-4 mt-10 lg:mt-0">
              <img
                src={faqImage}
                alt="vani-faq"
                className={cn("w-96 h-auto")}
              />
            </div>
            <div className="flex-2 w-full justify-center items-center text-sm md:text-lg text-start text-balance max-w-3xl pb-3 ">
              {accordionData.map((faq) => (
                <div className="mb-1">
                  <AccordionComponent
                    question={faq.title}
                    answer={faq.content}
                    classNameAccordion="text-black w-1/1 rounded-b-lg shadow-lg"
                    classNameAccordionTrigger="text-start w-full border border-black bg-transparent rounded-b-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <HeroSectionChildren id="faq" children={<Faq />} />;
};

export default FAQSection;
