# Special Effects

## Special Effects

- [Animated Beam](https://wireframes.design/docs/components/animated-beam)
- [Border Beam](https://wireframes.design/docs/components/border-beam)
- [Magic Card](https://wireframes.design/docs/components/magic-card)
- [Meteors](https://wireframes.design/docs/components/meteors)
- [Rotating Circles](https://wireframes.design/docs/components/rotating-circles)

## What this section should contain

- Overview of special effects available
- Implementation details for each effect

# React Component and SVG Icons

<---------------------------------------------- OneToManyOutput Component ------------------------------------------------->

## OneToManyOutput Component

```tsx
"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/wireframes/special-effects/animated-beam";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function OneToManyOutput({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <Icons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDocs />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.messenger />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.notion />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9 6.072 6.072 0 0 0 4.9798-3.0008 5.98 5.98 0 0 0 3.9966-2.9 6.0482 6.0482 0 0 0-.7437-7.0966zm-10.484-4.91a3.364 3.364 0 0 1 3.6162 1.6081 3.3884 3.3884 0 0 1-3.6162 1.6081 3.3536 3.3536 0 0 1-3.6123-1.6081 3.3856 3.3856 0 0 1 3.6123-1.6081zm-2.2916 12.305a3.3714 3.3714 0 0 1 3.6162 1.6071 3.3955 3.3955 0 0 1-3.6162 1.6071 3.3606 3.3606 0 0 1-3.6123-1.6071 3.3925 3.3925 0 0 1 3.6123-1.6071zm3.6313-7.6556a1.9242 1.9242 0 0 1-2.0646.9377 1.9374 1.9374 0 0 1-2.0645-.9377 1.9052 1.9052 0 0 1 2.0645-.9377 1.9193 1.9193 0 0 1 2.0646.9377zm-2.0646 3.9257a1.9316 1.9316 0 0 1 2.0646.9377 1.9052 1.9052 0 0 1-2.0646.9377 1.9374 1.9374 0 0 1-2.0645-.9377 1.9374 1.9374 0 0 1 2.0645-.9377z" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  googleDocs: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 4v3h3v1H7v3H6V8H3V7h3V4h1zm7 0v3h3v1h-3v3h-1V8h-3V7h3V4h1zM7 12v3h3v1H7v3H6v-3H3v-1h3v-3h1zm7 0v3h3v1h-3v3h-1v-3h-3v-1h3v-3h1z" />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        d="M12 1C5.5 1 1 5.5 1 12s4.5 11 11 11 11-4.5 11-11S18.5 1 12 1zm0 2c1.15 0 2.26.19 3.3.55l-1.54 1.6c-.3-.09-.63-.15-.96-.15-1.02 0-1.95.52-2.5 1.31l-.36.54-1.14-.73-.23-.15c-.3-.19-.63-.34-.98-.34-.23 0-.48.05-.7.16l-.36.14-1.3.55-.34.14c-.63.3-1.14.74-1.54 1.3L5.84 10l.56 1.28c.08.2.12.42.12.65 0 .35-.16.66-.42.86l-.16.12-.88.47c-.19.1-.4.13-.62.13-.46 0-.88-.2-1.2-.55-.32-.34-.5-.8-.5-1.31 0-.36.1-.7.3-1.02l.14-.24.69-1.1.14-.24c.12-.19.25-.37.4-.52l.26-.23.9-.75c.34-.3.75-.52 1.2-.63l.3-.06.98-.16.55-.07c.27-.06.53-.14.78-.24.26-.1.52-.23.76-.38l.17-.12 1.14-.9.35-.27c.33-.25.64-.54.93-.85l.28-.3.58-.74c.27-.34.48-.7.65-1.1.15-.4.22-.83.22-1.26 0-.95-.34-1.84-.95-2.54-.6-.7-1.4-1.19-2.3-1.41l-.42-.08-.9-.35c-.3-.15-.64-.22-.98-.22-1.02 0-1.96.53-2.5 1.33l-.37.56-.45.72c-.62.08-1.22.22-1.78.4l-.2.07-1.34.57c-.48.23-.92.53-1.32.9L5.34 5.7c1.13-.55 2.37-.85 3.66-.85z"
      />
    </svg>
  ),
  messenger: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        d="M17 2C9.832 2 4 7.832 4 14c0 2.03.667 3.898 1.795 5.407L5.05 19.7c-.37.42-.558.946-.508 1.495l.456 3.31a.749.749 0 0 0 .948.603l2.964-.933C12.906 23.097 13.924 24 15.125 24c1.21 0 2.23-.92 2.351-2.119l.933-9.196C19.102 10.85 20 8.973 20 7c0-6.168-5.832-11-13-11zm1.043 10.188l-4.537 4.504-2.442-2.417c-.348-.347-.904-.342-1.252.01l-3.055 3.01.95-6.904 5.923-5.871c.354-.352.91-.35 1.263.006l2.345 2.324 4.055 4.023-2.29 2.292zm-2.894-2.88l-2.515 2.5-4.068-4.027 5.796-1.829 1.787 1.77-1 1.586z"
      />
    </svg>
  ),
  user: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        d="M12 12c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0-10C7.059 2 3 6.059 3 11c0 1.804.66 3.49 1.768 4.832C5.592 17.433 8.446 20 12 20s6.408-2.567 7.232-4.168C20.34 14.49 21 12.804 21 11c0-4.941-4.059-9-9-9zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"
      />
    </svg>
  ),
};

export function BiDirections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            <Icons.user />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.openai />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
        reverse
      />
    </div>
  );
}
```

## Example Usage

<div>
    <OneToManyOutput/>
    <BiDirections/>
</div>
<---------------------------------------------- OneToManyOutput Component ------------------------------------------------->

<---------------------------------------------- ParticlesDemo Component ------------------------------------------------->

# ParticlesDemo Component

The `ParticlesDemo` component is a React component that demonstrates the usage of particles with dynamic color based on the theme using Next.js and Next.js Themes.

## Implementation

```tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

const ParticlesDemo = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export ParticlesDemo;
```

## Example Usage

To use the `ParticlesDemo` component:

1. Import the component into your desired React file:
   import ParticlesDemo from '@/path/to/ParticlesDemo';

```tsx
function App() {
  return (
    <div className="App">
      <ParticlesDemo />
    </div>
  );
}

export default App;
```

<---------------------------------------------- ParticlesDemo Component ------------------------------------------------->

<---------------------------------------------- AnimatedBeam Component ------------------------------------------------->

# AnimatedBeam Component

The `AnimatedBeam` component creates an animated beam effect between two elements within a container.

## Implementation

```tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RefObject, useEffect, useId, useState } from "react";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>; // Container ref
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let entry of entries) {
        updatePath();
      }
    });

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Call the updatePath initially to set the initial path
    updatePath();

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
```

## Example Usage

To use the `AnimatedBeam` component:
1. Import the component into your React file.
2. Create `refs` for the container and elements between which you want to animate.
3. Render the `AnimatedBeam` component with required props.

```tsx
import { useRef } from "react";
import { AnimatedBeam } from "@/path/to/AnimatedBeam";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <div ref={containerRef}>
        <div ref={fromRef}>...</div>
        <div ref={toRef}>...</div>
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={toRef}
          curvature={20}
          reverse={false}
          pathColor="#ff0000"
          pathWidth={3}
          pathOpacity={0.5}
          gradientStartColor="#ffaa40"
          gradientStopColor="#9c40ff"
          delay={0}
          duration={4}
          startXOffset={0}
          startYOffset={0}
          endXOffset={0}
          endYOffset={0}
        />
      </div>
    </div>
  );
}

export default App;
```

<---------------------------------------------- AnimatedBeam Component ------------------------------------------------->

_Credits: magicui.design_
