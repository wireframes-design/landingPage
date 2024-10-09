/* eslint-disable @typescript-eslint/no-unused-vars */
// src/page-section/landing/RoadmapSection.tsx
import { cn } from "@/lib/utils";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import BlurIn from "@/wireframes/text-animations/blur-in";
import Marquee from "@/wireframes/components/marquee";

const RoadmapSection: React.FC = () => {
  const logo = "/client-logo/dark-logo/dark.jpeg"
  const roadmap = [
    {
      id: 1,
      title: "AI Talk",
      description:
        "Engage in dynamic, AI-driven conversations that simulate real-life interactions, helping you practice and improve your language skills in real time.",
      img: logo,
    },
    {
      id: 2,
      title: "MCQ - AI Analysis",
      description:
        "Test your knowledge with multiple-choice questions, with AI-powered analysis providing detailed feedback and insights to help you learn from your answers.",
      img: logo,
    },
    {
      id: 3,
      title: "Community",
      description:
        "Connect with fellow learners in a supportive community where you can share experiences, ask questions, and practice together.",
      img: logo,
    },
    {
      id: 4,
      title: "Talk to Experts",
      description:
        "Get personalized guidance by speaking directly with language experts who can provide advanced tips, corrections, and insights.",
      img: logo,
    },
    {
      id: 5,
      title: "Meet via Google Meet",
      description:
        "Participate in live, interactive sessions with instructors or peers through Google Meet, enabling real-time conversation practice and collaborative learning.",
      img: logo,
    },
    {
      id: 6,
      title: "Augmented Reality Integration",
      description:
        "Experience immersive learning with augmented reality, where you can interact with virtual environments and objects that enhance your understanding and use of the language in context.",
      img: logo,
    },
  ];

  const firstRow = roadmap.slice(0, roadmap.length / 2);
  const secondRow = roadmap.slice(roadmap.length / 2);

  const ReviewCard = ({
    img,
    title,
    username,
    description,
  }: {
    img?: string;
    title?: string;
    username?: string;
    description?: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-72 cursor-pointer overflow-hidden rounded-xl border border-accent p-4"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-accent">{title}</figcaption>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-start text-black">
          {description}
        </blockquote>
      </figure>
    );
  };

  const Roadmap = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 py-4 mb-10">
          <header className="text-center md:text-start mb-8 px-4 sm:my-10 text-wrap">
            <BlurIn
              word="Milestones & Goals"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-normal font-bold text-accent"
            />
          </header>
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((roadmap) => (
              <ReviewCard key={roadmap.title} {...roadmap} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((roadmap) => (
              <ReviewCard key={roadmap.title} {...roadmap} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    );
  };

  return <HeroSectionChildren id="roadmap" children={<Roadmap />} />;
};

export default RoadmapSection;
