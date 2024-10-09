/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/HomePage.tsx
import React from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import AlertDialogComponent from "@/components/alert-dialog/alert-dialog-component";
import ClientSlider from "@/components/slider/client-slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IconCloudLib from "@/wireframes/components/icon-cloud";
import ShineBorder from "@/wireframes/components/shine-border";
import BlurIn from "@/wireframes/text-animations/blur-in";
import { VelocityScroll } from "@/wireframes/components/scroll-based-velocity";
import GradualSpacing from "@/wireframes/text-animations/gradual-spacing";
import DotPattern from "@/wireframes/backgrounds/pattern/dot-pattern";
import { cn } from "@/lib/utils";
import LinearGradient from "@/wireframes/backgrounds/gradient/linear-gradient";
import { NeonGradientCard } from "@/wireframes/backgrounds/gradient/neon-gradient-card";
import GridPattern from "@/wireframes/backgrounds/pattern/animated-grid-pattern";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CarouselBlogs from "@/page-sections/blogs/carousel-blogs/carousel-blogs";
import Services from "@/page-sections/home/services";
import Map from "@/components/Map";
import Blogs from "@/page-sections/home/blogs";
import colors from "@/datasets/colors.json";
import ShimmerButton from "@/wireframes/buttons/shimmer-button";
import DefaultLayout from "@/wireframes/layouts/default";

const Components: React.FC = () => {
 
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const defaultLayoutChild = (
    <div className="h-80 border rounded-lg flex justify-center items-center">
      <h1 className="text-3xl font-bold">Default Layout Child</h1>
    </div>
  );

  return (
    <HeroSectionChildren id="components" className="py-10">
      {/* {------------------------------------------------- Light Colors ------------------------------------------------} */}

      <div className="mt-20 md:mt-20">
        <h3 className="text-start text-3xl font-bold underline">
          Color Pallets
        </h3>
      </div>
      <div>
        <h3 className="text-start text-2xl font-bold mt-4">Light Colors</h3>
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center min-h-96 py-5 px-3 mt-4 order border border-foreground rounded-lg drop-shadow-lg">
        {colors[0].light_color.map((color, index) => (
          <div className="text-center w-fit" key={index}>
            <div className="flex justify-center">
              <div
                className={`w-20 h-20 rounded-full bg-${color.color_name} border border-foreground flex items-center justify-center`}
                style={{ backgroundColor: color.color_code }}
              ></div>
            </div>
            <p className="mt-2 text-sm">{color.color_code}</p>
            <p className="text-sm">{color.hsl_code}</p>
            <p className="text-sm">{color.color_name}</p>
          </div>
        ))}
      </div>
      {/* {------------------------------------------------- Light Colors ------------------------------------------------} */}

      <hr className="mt-10 mb-10" />

      {/* {------------------------------------------------- Dark Colors ------------------------------------------------} */}

      
      {/* {------------------------------------------------- Dark Colors ------------------------------------------------} */}

      {/* {------------------------------------------------------ Alert Dialog ----------------------------------------------------} */}

      <div>
        <h3 className="text-start text-2xl font-bold">Alert Dialog</h3>
      </div>
      <div className="mt-4 text-start">
        <AlertDialogComponent
          dialogTitle="Are you absolutely sure?"
          dialogDescription="This action cannot be undone. This will permanently delete your account and remove your whole data."
          cancelBtnText="Cancel"
          saveBtnText="Delete"
          triggerBtnColor="text-white"
        />
      </div>
      {/* {------------------------------------------------------ Alert Dialog ----------------------------------------------------} */}

      <hr className="mt-10 mb-10" />

      {/* {---------------------------------------------------- Button Variants ---------------------------------------------------} */}
      <div>
        <h3 className="text-start text-2xl font-bold">Button Variants</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div>
          <Button variant={"default"}>Default Btn</Button>
        </div>
        <div>
          <Button className="text-white" variant={"ghost"}>
            Ghost Btn
          </Button>
        </div>
        <div>
          <Button variant={"destructive"}>Destructive Btn</Button>
        </div>
        <div>
          <Button variant={"link"}>Link Btn</Button>
        </div>
        <div>
          <Button variant={"outline"}>Outline Btn</Button>
        </div>
        <div>
          <Button variant={"secondary"}>Secondary Btn</Button>
        </div>
      </div>
      {/* {---------------------------------------------------- Button Variants ---------------------------------------------------} */}

      <hr className="mt-10" />

      <div className="mt-10">
        <h3 className="text-start text-2xl font-bold">CheckBox</h3>
      </div>
      <div className="mt-4 text-start">
        <Checkbox className="peer h-[1rem] w-[18px] p-0 rounded-none  border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:border-muted-foreground data-[state=checked]:text-background dark:border-gray-600 dark:focus:ring-blue-400 dark:data-[state=checked]:bg-foreground dark:data-[state=checked]:text-gray-900" />
      </div>
      <hr className="mt-10" />

      <div className="mt-10">
        <h3 className="text-start text-2xl font-bold">Card</h3>
      </div>
      <div className="mt-4">
        <Card className="border rounded-lg w-80">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="text-center flex items-center">
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <hr className="mt-10 mb-10" />

     
      <div>
        <h3 className="text-center text-4xl font-bold">Wireframe Components</h3>
      </div>

      {/* <hr className="mt-10 mb-10" /> */}

      <div>
        <h3 className="text-start text-3xl font-bold underline">Backgrounds</h3>
      </div>
      <div>
        <h3 className="text-start text-2xl font-bold mt-10 underline">
          Gradient
        </h3>
      </div>
      <div className="mt-2">
        <h3 className="text-start text-2xl font-bold">Neon Gradient Card</h3>
      </div>
      <div className="mt-4">
        <NeonGradientCard className="w-full h-[300px] items-center border shadow justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Neon Gradient Card
          </span>
        </NeonGradientCard>
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <h3 className="text-start text-2xl font-bold">Linear Gradient</h3>
      </div>
      <div className="mt-4">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black dark:text-white">
            Linear Gradient
          </p>
          <DotPattern
            width={20}
            height={20}
            cx={1}
            cy={1}
            cr={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
          <LinearGradient />
        </div>
      </div>
      <hr className="mt-10 mb-10" />

      <div>
        <h3 className="text-start text-2xl font-bold mt-10 underline">
          Pattern
        </h3>
      </div>
      <div className="mt-2">
        <h3 className="text-start text-2xl font-bold">Dot Pattern</h3>
      </div>
      <div className="mt-4">
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <p className="z-10 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white">
            Dot Pattern
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <h3 className="text-start text-2xl font-bold">Grid Pattern</h3>
      </div>
      <div className="mt-4">
        <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Grid Pattern
          </p>
          <GridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
        </div>
      </div>
      <hr className="mt-10 mb-10" />

      <div>
        <h3 className="text-start text-2xl font-bold">Icon Cloud</h3>
      </div>
      <div className="mt-4 flex items-start border w-fit rounded-lg p-5">
        <IconCloudLib iconSlugs={slugs} />
      </div>
      <hr className="mt-10 mb-10" />

      <div className="mt-10">
        <h3 className="text-start text-2xl font-bold">Marquee</h3>
      </div>
      <div className="mt-4">
        <ClientSlider />
      </div>
      <hr className="mt-10 mb-10" />

      <div className="mt-10">
        <h3 className="text-start text-2xl font-bold">Shine Border</h3>
      </div>
      <div className="mt-4">
        <ShineBorder
          className="relative flex h-[300px] w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
          color={
            [
              `hsl(var(--shine-border-one))`,
              `hsl(var(--shine-border-two))`,
              `hsl(var(--shine-border-three))`,
            ] as Array<string>
          }
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Shine Border
          </span>
        </ShineBorder>
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <h3 className="text-start text-3xl font-bold underline">
          Text Animations
        </h3>
      </div>
      <div className="mt-10">
        <h3 className="text-start text-2xl font-bold">Blur In</h3>
      </div>
      <div className="mt-4 text-start">
        <BlurIn
          word="Blur In"
          className="text-4xl font-bold text-black dark:text-white"
        />
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <h3 className="text-start text-2xl font-bold">Gradual Spacing</h3>
      </div>
      <div className="mt-4">
        <GradualSpacing
          className="font-display text-center mt-0 text-2xl font-bold tracking-[-0.1em]  text-foreground dark:text-white md:text-7xl md:leading-[5rem]"
          text="Gradual Spacing"
        />
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <h3 className="text-start text-2xl font-bold">Scroll Based Velocity</h3>
      </div>

      <div>
        <VelocityScroll
          text="We make the dream world into reality.|"
          default_velocity={3}
          className={`font-display text-muted-foreground text-center text-4xl font-normal tracking-[0.04em]  drop-shadow-sm  md:text-8xl md:leading-[5rem] mt-8 mb-14 px-4`}
        />
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <div>
          <h3 className="text-start text-2xl font-bold">Input Fields</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="mt-4">
            <h3 className="text-start text-md font-bold">Input</h3>

            <div className="mt-2">
              <Input
                className="w-full md:w-80 lg:w-96"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-start text-md font-bold">Textarea</h3>

            <div className="mt-2">
              <Textarea
                className="w-full md:w-80 lg:w-96"
                placeholder="Type your message here."
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <div>
          <h3 className="text-start text-2xl font-bold">Form</h3>
        </div>
        <div className="w-full">
          <form className={`rounded pt-6 mb-4 p-4 `}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-2">
              <div className="mb-4 text-foreground">
                <label
                  className={`block text-start text-sm font-bold mb-2`}
                  htmlFor="fullName"
                >
                  Full Name<span className="text-primary text-xl"> *</span>
                </label>
                <Input
                  className={`shadow appearance-none border rounded w-full py-2 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-foreground`}
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block text-start text-sm font-bold mb-2`}
                  htmlFor="contact"
                >
                  Contact<span className="text-primary text-xl"> *</span>
                </label>
                <Input
                  className={`shadow appearance-none  border rounded w-full py-2 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-foreground`}
                  type="text"
                  placeholder="Contact"
                />
              </div>
              <div className="mb-4">
                <label
                  className={`block text-start text-sm font-bold mb-2`}
                  htmlFor="email"
                >
                  Email<span className="text-primary text-xl"> *</span>
                </label>
                <Input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-foreground`}
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className={`block text-start text-sm font-bold mb-2`}
                htmlFor="message"
              >
                Message<span className="text-primary text-xl"> *</span>
              </label>
              <Textarea rows={4} placeholder="Message" className="rounded" />
            </div>
            <div className="text-start">
              <div className="flow items-start space-x-2">
                <Checkbox
                  name="intrestedInCompany"
                  className="peer h-[1rem] w-[18px] p-0 rounded-none  border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:border-muted-foreground data-[state=checked]:text-background dark:border-gray-600  dark:focus:ring-blue-400 dark:data-[state=checked]:bg-foreground dark:data-[state=checked]:text-gray-900"
                />

                <label
                  htmlFor="intrestedInCompany"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I'm intrested in hearing how vani can help my organisation
                </label>
              </div>
              <div className="flow items-start space-x-2 mt-4">
                <Checkbox
                  name="agreeToTerms"
                  className="peer h-[1rem] w-[18px] p-0 rounded-none  border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:border-muted-foreground data-[state=checked]:text-background dark:border-gray-600 dark:focus:ring-blue-400 dark:data-[state=checked]:bg-foreground dark:data-[state=checked]:text-gray-900"
                />

                <label
                  htmlFor="agreeToTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree, to allow vani to store and process my personal data.
                  View our{" "}
                  <a
                    href="/privacy-policy"
                    className={`underline underline-offset-4 text-primary hover:text-muted `}
                  >
                    privacy policy
                  </a>{" "}
                  to learn more.
                  <span className="text-primary text-xl"> *</span>
                </label>
              </div>
            </div>
            <div className={`z-10 flex items-center justify-center`}>
              <Button className="mt-4 bg-foreground text-background hover:bg-muted-foreground rounded-full text-lg">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <h3 className="text-start text-2xl font-bold">Carousel</h3>
      </div>
      <div className="mt-4">
        <CarouselBlogs />
      </div>
      <hr className="mt-10 mb-10" />
      <div>
        <h3 className="text-start text-2xl font-bold">Services Cards</h3>
      </div>
      <div className="">
        <Services />
      </div>
      <hr className="mt-10 mb-10" />

      {/* {----------------------------------------------------- Blogs ---------------------------------------------------} */}

      <div>
        <h3 className="text-start text-2xl font-bold">Blogs</h3>
      </div>
      <div>
        <Blogs className="text-foreground" />
      </div>

      {/* {----------------------------------------------------- Blogs ---------------------------------------------------} */}
      <hr className="mt-10 mb-10" />

      {/* {------------------------------------------------------ Map ----------------------------------------------------} */}
      <div>
        <h3 className="text-start text-2xl font-bold">Map</h3>
      </div>
      <div className="mt-4">
        <Map />
      </div>
      {/* {------------------------------------------------------ Map ----------------------------------------------------} */}

      <hr className="mt-10 mb-10" />

      {/* {------------------------------------------------- Shnimmer Button ----------------------------------------------} */}
      <div>
        <h3 className="text-start text-2xl font-bold">Shimmer Button</h3>
      </div>
      <div className="z-10 flex min-h-[16rem] items-center justify-center">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Shimmer Button
          </span>
        </ShimmerButton>
      </div>
      {/* {------------------------------------------------- Shnimmer Button ----------------------------------------------} */}

      <hr className="mt-10 mb-10" />

      {/* {----------------------------------------------------- Layouts ---------------------------------------------------} */}

      <div>
        <h3 className="text-start text-3xl font-bold underline">Layouts</h3>
      </div>
      <div>
        <h3 className="text-start text-2xl font-bold mt-10">Default Layout</h3>
      </div>
      <div className="mt-4">
        <DefaultLayout children={defaultLayoutChild} />
      </div>
      {/* {----------------------------------------------------- Layouts ---------------------------------------------------} */}

      <hr className="mt-10 mb-10" />
    </HeroSectionChildren>
  );
};

export default Components;
