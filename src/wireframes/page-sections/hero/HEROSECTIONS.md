<------------------------------------------------ HeroSection ----------------------------------------------------->

# HeroSection Component

## Overview

The `HeroSection` component is a React functional component designed to render a full-screen hero section with a title and description. It dynamically applies background and text colors based on the current theme provided by a theme context.

## Installation

Ensure you have the following dependencies installed in your React project:

- React
- Tailwind CSS
- A theme context provider that supplies the `useTheme` hook

## Usage

1. **Import the Component:**

   ```tsx
   import HeroSection from "path/to/HeroSection";

   <HeroSection
     id="hero-section"
     title="Welcome to Our Website"
     description="Discover the best services we offer and how we can help you achieve your goals."
   />;
   ```

   `id` (string): Unique identifier for the section, useful for navigation or styling.
   `title` (string): Main heading for the hero section.
   `description` (string): Brief description or subheading for additional context.

## Example

Here's an example of how to use the `HeroSection` component in your application:

```tsx
import React from "react";
import HeroSection from "./components/HeroSection"; // Adjust the path as necessary

const App = () => {
  return (
    <div>
      <HeroSection
        id="hero-section"
        title="Put the title here"
        description="Add Description here."
      />
      {/* Other components */}
    </div>
  );
};

export default App;
```

<------------------------------------------------ HeroSection ----------------------------------------------------->

<--------------------------------------------- HeroSectionChildren ------------------------------------------------->

# HeroSectionChildren Component

## Overview

The `HeroSectionChildren` component is a React functional component designed to create a flexible hero section that can contain any child elements. It supports optional `id` and `className` props for customization and styling.

## Installation

Ensure you have the following dependencies installed in your React project:

- React
- A utility function `cn` for conditionally combining class names

## Usage

1. **Import the Component:**

   ```tsx
   import HeroSectionChildren from "path/to/HeroSectionChildren";
   ```

   <HeroSectionChildren id="hero-section" className="bg-blue-500 text-white">
   <h2 className="text-4xl font-bold leading-9">Title here</h2>
   <p className="mt-4 text-lg">Add the descriptive data according to the content.</p>
   </HeroSectionChildren>
   ```

   ```
   `id` (string, optional): Unique identifier for the section, useful for navigation or styling.
   `children` (ReactNode, optional): The content to be rendered inside the hero section.
   `className` (string, optional): Additional CSS classes to apply to the section element.
   ```

## Example

Here’s an example of how to use the `HeroSectionChildren` component in your application:

```tsx
import React from "react";
import HeroSectionChildren from "./components/HeroSectionChildren"; // Adjust the path as necessary

const App = () => {
  return (
    <div>
      <HeroSectionChildren id="hero-section" className="bg-gray-900 text-white">
        <h2 className="text-4xl font-bold leading-9">Title here</h2>
        <p className="mt-4 text-lg">
          Add the descriptive data according to the content.
        </p>
      </HeroSectionChildren>
      {/* Other components */}
    </div>
  );
};

export default App;
```

## Explanation

# Imports

```tsx
import { cn } from "@/lib/utils";
import React from "react";
```

1. `cn`: A utility function for conditionally combining class names.
2. `React`: Imported to use JSX syntax and the `React.FC` type.

# Component Definition:

1. `HeroSectionChildren` is defined as a functional component (`React.FC`).
2. It accepts `id`, `children`, and `className` props.
3. The `section` element uses `cn` to conditionally combine the default styles with any additional classes provided via `className`.

# Styling:

1. Uses Tailwind CSS classes for layout and styling.
2. Default classes: `flex flex-col justify-center items-center min-h-screen px-4 md:px-8 lg:px-16`.
3. `className` prop allows for additional custom styling.

<--------------------------------------------- HeroSectionChildren ------------------------------------------------->

<------------------------------------------------ HeroSectionTwo --------------------------------------------------->

# HeroSectionTwo Component

## Overview

The `HeroSectionTwo` component is a React functional component designed to create a hero section with a flexible layout. It allows you to place different content i.e. images on the left and right sides of the section and optionally include a title. The component dynamically adjusts its styling based on the current theme provided by a theme context.

## Installation

Ensure you have the following dependencies installed in your React project:

- React
- A theme context provider that supplies the `useTheme` hook

## Usage

1. **Import the Component:**

   ```tsx
   import HeroSectionTwo from "path/to/HeroSectionTwo";

   <HeroSectionTwo
     id="hero-section"
     title={<h2 className="text-3xl font-bold">Welcome to Our Website</h2>}
     leftChild={<p className="text-lg">Discover the best services we offer.</p>}
     rightChild={
       <img
         src="/path/to/image.jpg"
         alt="Description"
         className="w-full max-w-sm"
       />
     }
   />;
   ```

1. `id` (string): Unique identifier for the section, useful for navigation or styling.
2. `title` (React.ReactNode, optional): The content to display as the title of the hero section.
3. `leftChild` (React.ReactNode): The content to display on the left side of the hero section.
4. `rightChild` (React.ReactNode): The content to display on the right side of the hero section.

## Example
```tsx
import React from 'react';
import HeroSectionTwo from './components/HeroSectionTwo'; // Adjust the path as necessary
import { ThemeProvider } from './context/ThemeProvider'; // Adjust the path as necessary

const App = () => {
  return (
    <ThemeProvider>
      <HeroSectionTwo
        id="hero-section"
        title={<h2 className="text-3xl font-bold">Title here</h2>}
        leftChild={<p className="text-lg">Description here</p>}
        rightChild={<img src="/path/to/image.jpg" alt="Description" className="w-full max-w-sm" />}
      />
      {/* Other components */}
    </ThemeProvider>
  );
};

export default App;
```

## Explanation
```tsx
import React from 'react';
import { useTheme } from 'path/to/theme-provider';
```
1. `React`: Imported to use TSX syntax and the `React.FC` type.
2. `useTheme`: Custom hook that provides the current theme context.


## Component Definition

1. `HeroSectionTwo` is defined as a functional component (`React.FC`).
2. It accepts `id`, `leftChild`, `rightChild`, and `title` props.
3. Uses the `theme` value from `useTheme` to dynamically set background and text colors.
4. The layout is flexible, adapting between column and row layouts based on screen size.

# Styling:

1. Uses Tailwind CSS classes for layout and styling.
2. Default classes: `justify-center items-center min-h-screen px-4 md:px-8 lg:px-16`, and dynamic classes based on the theme.

<------------------------------------------------ HeroSectionTwo --------------------------------------------------->


<--------------------------------------------- HeroSectionWithProps ------------------------------------------------>
# HeroSectionWithProps Component

## Overview

The `HeroSectionWithProps` component is a flexible and customizable React component designed for use in hero sections of a webpage. It allows for the inclusion of various content elements, including images, titles, descriptions, and a marquee list. It also supports optional pattern components and category tags.

## Installation

Ensure you have the following dependencies installed in your React project:

- React
- A marquee component (`Marquee`)
- A text animation component (`BlurIn`)
- A utility function `cn` for conditionally combining class names

## Usage

1. **Import the Component:**

   ```tsx
   import HeroSectionWithProps from 'path/to/HeroSectionWithProps';

## Explanation

# Imports
```tsx
import React from "react";
import Marquee from "@/wireframes/components/marquee";
import BlurIn from "@/wireframes/text-animations/blur-in";
import { cn } from "@/lib/utils";
```
1. `React`: Imported to use TSX syntax and `React.FC`.
2. `Marquee`: A component for displaying scrolling or animated text.
3. `BlurIn`: A text animation component.
4. `cn`: A utility function for conditionally combining class names.

# Section Layout
1. The component uses Flexbox for layout, adjusting based on screen size.
2. It conditionally renders the `PatternComponent` if provided.
3. Images, text, and marquee content are displayed in a responsive layout.


## Styling:
1. Uses Tailwind CSS classes for layout and styling.
2. `cn` is used to conditionally apply additional CSS classes.
<--------------------------------------------- HeroSectionWithProps ------------------------------------------------>
