# Backgrounds

## Backgrounds

- [Animated Grid Pattern](https://wireframes.design/docs/components/animated-grid-pattern)
- [Retro Grid](https://wireframes.design/docs/components/retro-grid)
- [Ripple](https://wireframes.design/docs/components/ripple)
- [Dot Pattern](https://wireframes.design/docs/components/dot-pattern)
- [Grid Pattern](https://wireframes.design/docs/components/grid-pattern)
- [Linear Gradient](https://wireframes.design/docs/components/linear-gradient)
- [Radial Gradient](https://wireframes.design/docs/components/radial-gradient)

## What this section should contain

- Overview of background options
- Implementation and customization details


<------------------------------------------- AnimatedGridPattern Component --------------------------------------------->

# AnimatedGridPattern Component

## Description

The `AnimatedGridPattern` component is a custom UI component designed to display an animated grid pattern. It is highly customizable and can be used to add dynamic visual effects to your web application.

## Implementation

The `AnimatedGridPattern` component is implemented in the `@/components/magicui/animated-grid-pattern` file. Here is a basic example of how to create and use this component:

```tsx
// File: @/components/magicui/animated-grid-pattern.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const AnimatedGridPattern = ({
  numSquares,
  maxOpacity,
  duration,
  repeatDelay,
  className,
}) => {
  // Implementation of the animated grid pattern
  return (
    <div className={cn("animated-grid-pattern", className)}>
      {/* Grid pattern implementation here */}
    </div>
  );
};

AnimatedGridPattern.propTypes = {
  numSquares: PropTypes.number,
  maxOpacity: PropTypes.number,
  duration: PropTypes.number,
  repeatDelay: PropTypes.number,
  className: PropTypes.string,
};

export default AnimatedGridPattern;
```

## Usage

To use the `AnimatedGridPattern` component, you need to import it and pass the desired properties. Below is an example of how to create a demo component (`AnimatedGridPatternDemo`) that utilizes `AnimatedGridPattern`:

```tsx
// File: AnimatedGridPatternDemo.jsx

import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Animated Grid Pattern
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
```

## Explanation

1. **Importing the Component**: First, import the `AnimatedGridPattern` component.
2. **Using the Component**: Wrap your content with the `AnimatedGridPattern` component and pass any additional properties as needed.
3. **Content Styling**: In the example, a `div` element is styled with various classes to create a visually appealing animated grid pattern.

## Props

The `AnimatedGridPattern` component accepts the following props:

- **numSquares** (number): Number of squares in the grid pattern.
- **maxOpacity** (number): Maximum opacity of the squares.
- **duration** (number): Duration of the animation in seconds.
- **repeatDelay** (number): Delay between each animation repeat in seconds.
- **className** (string): Additional classes for styling the component.

## Customization

### Styling the Grid Pattern

You can customize the `AnimatedGridPattern` component by passing additional classes through the `className` prop. Here is an example of customizing the pattern's mask image, position, and skew:

```tsx
<AnimatedGridPattern
  numSquares={30}
  maxOpacity={0.1}
  duration={3}
  repeatDelay={1}
  className={cn(
    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
  )}
/>
```

### Adjusting the Animation Properties

You can change the animation properties by modifying the `numSquares`, `maxOpacity`, `duration`, and `repeatDelay` props. Here is an example:

```jsx
<AnimatedGridPattern
  numSquares={50}
  maxOpacity={0.2}
  duration={5}
  repeatDelay={2}
  className={cn(
    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
  )}
/>
```

## Example Usage

```tsx
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';

const App = () => {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Animated Grid Pattern
      </p>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
};

export default App;
```

## Notes

- Ensure you have appropriate styles in place for the `animated-grid-pattern` class to achieve the desired animated grid effect.
- You can customize the animation properties, grid pattern styles, and other properties as per your project requirements.

<------------------------------------------- AnimatedGridPattern Component --------------------------------------------->



<------------------------------------------- DotPatternDemo Component --------------------------------------------->
# Dot Pattern Demo

This Markdown file explains the implementation and usage of the `DotPatternDemo` component in a React application.

## Implementation

### Importing Components and Utilities

```tsx
"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export function DotPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
```
# Explanation
1. **Container Styling:** The outer div serves as a container with specific styles (h-[500px], rounded-lg, bg-background, etc.).
2. **Text Element:** A large title (text-5xl) is centered within the container, styled for both light and dark themes `(text-black dark:text-white)`.
3. **DotPattern Component:** Renders the `DotPattern` component with a dynamic class name generated using cn utility function. This includes a CSS mask to apply a radial gradient for visual effects.

## Example Usage
To use the `DotPatternDemo` component:

1. Ensure the required components (`DotPattern`, `cn`) are imported correctly.
2. Render the `DotPatternDemo` component within your application, typically within a parent component or a specific route.

```tsx
import { DotPatternDemo } from './path/to/DotPatternDemo';

function App() {
  return (
    <div className="App">
      <DotPatternDemo />
    </div>
  );
}

export default App;
```

<------------------------------------------- DotPatternDemo Component --------------------------------------------->






*Credits: magicui.design*
