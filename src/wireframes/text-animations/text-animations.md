# Text Animations

## Text Animations

- [Number Ticker](https://wireframes.design/docs/components/number-ticker)
- [Animated Shiny Text](https://wireframes.design/docs/components/animated-shiny-text)
- [Animated Gradient Text](https://wireframes.design/docs/components/animated-gradient-text)
- [Text Reveal](https://wireframes.design/docs/components/text-reveal)
- [Word Rotate](https://wireframes.design/docs/components/word-rotate)
- [Typing Animation](https://wireframes.design/docs/components/typing-animation)
- [Wavy Text](https://wireframes.design/docs/components/wavy-text)
- [Blur In](https://wireframes.design/docs/components/blur-in)
- [Separate Away](https://wireframes.design/docs/components/separate-away)
- [Scroll Based Velocity](https://wireframes.design/docs/components/scroll-based-velocity)
- [Letter Pullup](https://wireframes.design/docs/components/letter-pullup)
- [Word Pull Up](https://wireframes.design/docs/components/word-pull-up)
- [Flip Text](https://wireframes.design/docs/components/flip-text)

## What this section should contain

- Various text animations
- How to implement and customize each animation


<---------------------------------------------- BlurIn Component ------------------------------------------------->

# BlurIn Component

The `BlurIn` component is a React component that animates text using a blur effect as it transitions from hidden to visible using Framer Motion.

## Implementation

```tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}

const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;
```

## Example Usage

To use the `BlurIn` component:

1. Import the component into your desired React file.

2. Render the component within your JSX structure, passing the necessary props.

```tsx
import BlurIn from '@/path/to/BlurIn';
const MyComponent = () => {
  return (
    <div>
      <BlurIn word="Hello, World!" />
    </div>
  );
};
```

3. Customize the component by adjusting the `word`, `className`, `variant`, and `duration` props as needed. 

```tsx

const MyComponent = () => {
  const customVariants = {
    hidden: { filter: "blur(20px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div>
      <BlurIn
        word="Custom Animation"
        className="my-custom-class"
        variant={customVariants}
        duration={2}
      />
    </div>
  );
};

export default MyComponent;
```

## Props
1. `word` (string, required): The text to animate.
2. `className` (string, optional): Additional CSS classes to apply to the text element.
3. `variant` (object, optional): Custom variants for the hidden and visible states of the animation. Defaults to a blur effect.
4. `duration` (number, optional): Duration of the animation in seconds. Defaults to 1 second.


## Customization

The `BlurIn` component is highly customizable. Here are some ways to tailor it to your needs:

1. Changing the Text:

Use the `word` prop to set the text you want to animate.
    <BlurIn word="New Text" />

2. Styling:

Use the `className` prop to add custom CSS classes for styling the text.
    <BlurIn word="Styled Text" className="text-red-500" />

3. Animation Variants:

Customize the animation by providing a `variant` prop. Define the hidden and visible states with different filters or opacity levels.

```tsx
const customVariants = {
  hidden: { filter: "blur(20px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

<BlurIn word="Blur Animation" variant={customVariants} />
```

4. Duration:

Control the animation duration using the `duration` prop.
<BlurIn word="Slow Animation" duration={3} />


## Example with All Customizations

```tsx
const MyComponent = () => {
  const customVariants = {
    hidden: { filter: "blur(20px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div>
      <BlurIn
        word="Fully Customized"
        className="text-blue-600"
        variant={customVariants}
        duration={2.5}
      />
    </div>
  );
};

export default MyComponent;
```

The `BlurIn` component is a simple yet flexible way to add animated text effects to your application, enhancing the user experience with smooth transitions.
<---------------------------------------------- BlurIn Component ------------------------------------------------->


<---------------------------------------------- GradualSpacing Component ------------------------------------------------->
# GradualSpacing Component

The `GradualSpacing` component is a React component that animates each character of a string with a gradual spacing effect using Framer Motion.

## Implementation

```tsx
"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className="flex justify-center space-x-1">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm ", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
```
## Example Usage
To use the `GradualSpacing` component:

1. Import the component into your desired React file.
2. Render the component within your TSX structure, passing the necessary props.
3. Customize the component by adjusting the `text`, `duration`, `delayMultiple`, `framerProps`, and `className` props as needed.
    
```tsx    
import GradualSpacing from '@/path/to/GradualSpacing';

const MyComponent = () => {
  const customFramerProps = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <GradualSpacing
        text="Custom Animation"
        duration={1}
        delayMultiple={0.1}
        framerProps={customFramerProps}
        className="my-custom-class"
      />
    </div>
  );
};

export default MyComponent;
```

## Props
1. `text` (string, required): The text to animate.
2. `duration` (number, optional): Duration of each character's animation in seconds. Defaults to 0.5 seconds.
3. `delayMultiple` (number, optional): Delay multiplier between each character's animation. Defaults to 0.04 seconds.
4. `framerProps` (object, optional): Custom variants for the hidden and visible states of the animation. Defaults to a fade-in effect.
5. `className` (string, optional): Additional CSS classes to apply to the text element.

## Customization
```tsx
const MyComponent = () => {
  const customFramerProps = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <GradualSpacing
        text="Fully Customized"
        duration={1}
        delayMultiple={0.1}
        framerProps={customFramerProps}
        className="text-blue-600"
      />
    </div>
  );
};

export default MyComponent;
```
The `GradualSpacing` component is a flexible way to add animated text effects to your application, enhancing the user experience with smooth and customizable transitions.

<---------------------------------------------- GradualSpacing Component ------------------------------------------------->


<---------------------------------------------- TextRevealByWord Component ------------------------------------------------->
# TextRevealByWord Component

The `TextRevealByWord` component is a React component that reveals each word of a given text as the user scrolls down the page, using Framer Motion for the animation.

## Implementation

```tsx
"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
```
## Example Usage
To use the TextRevealByWord component:

1. Import the component into your desired React file.
2. Render the component within your JSX structure, passing the necessary props.
3. Customize the component by adjusting the `text` and `className` props as needed.

```tsx
import TextRevealByWord from '@/path/to/TextRevealByWord';

const MyComponent = () => {
  return (
    <div>
      <TextRevealByWord
        text="Customizable text reveal effect."
        className="my-custom-class"
      />
    </div>
  );
};

export default MyComponent;

```

## Props
1. `text` (string, required): The text to reveal word by word.  
2. `className` (string, optional): Additional CSS classes to apply to the container element.

## Customization

The `TextRevealByWord` component is highly customizable. Here are some ways to tailor it to your needs:

```tsx
const MyComponent = () => {
  return (
    <div>
      <TextRevealByWord
        text="Fully customizable reveal effect for each word."
        className="text-blue-600"
      />
    </div>
  );
};

export default MyComponent;
```

<---------------------------------------------- TextRevealByWord Component ------------------------------------------------->

<---------------------------------------------- WordFadeIn Component ------------------------------------------------->

# WordFadeIn Component

The `WordFadeIn` component is a React component that animates each word of a given string with a fade-in effect using Framer Motion.

## Implementation

```typescript
"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className,
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
```

## Example Usage
To use the `WordFadeIn` component:

1. Import the component into your desired React file.
2. Render the component within your JSX structure, passing the necessary props.
3. Customize the component by adjusting the `words`, `delay`, `variants`, and `className` props as needed.  

```tsx
import WordFadeIn from '@/path/to/WordFadeIn';

const MyComponent = () => {
  return (
    <div>
      <WordFadeIn
        words="Customizable fade-in effect for each word."
        delay={0.2}
        className="my-custom-class"
      />
    </div>
  );
};

export default MyComponent;

```

## Props

1. `words` (string, required): The text to animate, with each word being animated separately.
2. `className` (string, optional): Additional CSS classes to apply to the text element.
3. `delay` (number, optional): Delay between each word's animation in seconds. Defaults to 0.15 seconds.
4. `variants` (object, optional): Custom variants for the hidden and visible states of the animation. Defaults to a fade-in effect with opacity.

## Customization
The `WordFadeIn` component is highly customizable. Here are some ways to tailor it to your needs:

```tsx
const MyComponent = () => {
  const customVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div>
      <WordFadeIn
        words="Fully customizable fade-in effect for each word."
        delay={0.2}
        variants={customVariants}
        className="text-blue-600"
      />
    </div>
  );
};

export default MyComponent;
```

The `WordFadeIn` component provides an engaging way to animate text, enhancing the visual appeal and user experience of your application with smooth and customizable transitions.
<---------------------------------------------- WordFadeIn Component ------------------------------------------------->


*Credits: magicui.design*
