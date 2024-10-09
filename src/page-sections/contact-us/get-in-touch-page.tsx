import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import { VelocityScroll } from "@/wireframes/components/scroll-based-velocity";

const GetInTouchPage: React.FC = () => {
  return (
    <HeroSectionChildren id="contact-us">
      <div className={`mx-auto px-4 mt-10`}>
        <header className={`text-start mb-4 `}>
          <h5 className="text-1xl md:text-2xl font-normal underline underline-offset-8 px-4">
            LET’S WORK TOGETHER<span className="text-primary"> .</span>{" "}
          </h5>
          <p className="text-3xl md:text-5xl mt-4 leading-normal px-4">
            Wanna get in touch? <span className="text-primary">Let’s talk</span>
          </p>
        </header>
        <section className="mb-4">
          <p className={`text-sm md:text-lg text-start max-w-3xl mt-2 px-4`}>
            We offer exceptional services tailored to a wide range of businesses
            that want to improve the effectiveness of their digital marketing
            activities with discernible returns on investment. We aim to get
            back to all enquiries rapidly.
          </p>
        </section>
        <div className={`text-start mb-8 px-4`}>
          <h5 className="text-1xl md:text-2xl font-normal mb-4">
            Interested in working with us?{" "}
            <a
              href="/contact-us"
              className={`ml-2 hover:text-primary underline underline-offset-4 text-primary`}
            >
              Contact us
            </a>
          </h5>
        </div>
        <div>
          <VelocityScroll
            text="We make the dream world into reality.|"
            default_velocity={3}
            className={`font-display text-muted-foreground text-center text-4xl font-normal tracking-[0.04em]  drop-shadow-sm  md:text-8xl md:leading-[5rem] mt-8 mb-14 px-4`}
          />
        </div>
      </div>
    </HeroSectionChildren>
  );
};

export default GetInTouchPage;
