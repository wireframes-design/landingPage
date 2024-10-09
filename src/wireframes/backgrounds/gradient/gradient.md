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

<---------------------------------------------- NeonGradientCard Component ------------------------------------------------->
# NeonGradientCard Component

## Description

The `NeonGradientCard` component is a custom UI component designed to display content with a neon gradient effect. It is highly customizable and can be used to enhance the visual appeal of your web application.

## Implementation

The `NeonGradientCard` component is implemented in the `@/components/magicui/neon-gradient-card` file. Here is a basic example of how to create and use this component:

```tsx
// File: @/components/magicui/neon-gradient-card.jsx

import React from 'react';
import PropTypes from 'prop-types';

const NeonGradientCard = ({ className, children }) => {
  return (
    <div className={`neon-gradient-card ${className}`}>
      {children}
    </div>
  );
};

NeonGradientCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NeonGradientCard;
```

## Usage

To use the `NeonGradientCard` component, you need to import it and pass the desired content as children. Below is an example of how to create a demo component (`NeonGradientCardDemo`) that utilizes `NeonGradientCard`:

```tsx
// File: NeonGradientCardDemo.jsx

import NeonGradientCard from '@/components/magicui/neon-gradient-card';

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
  );
}
```

## Explanation

1. **Importing the Component**: First, import the `NeonGradientCard` component.
2. **Using the Component**: Wrap your content with the `NeonGradientCard` component and pass any additional classes or styles as needed.
3. **Content Styling**: In the example, a `span` element is styled with various classes to create a visually appealing neon gradient text effect.

## Props

The `NeonGradientCard` component accepts the following props:

- **className** (string): Additional classes for styling the component.
- **children** (node): The content to be displayed within the card.

## Customization

### Styling the Card

You can customize the `NeonGradientCard` component by passing additional classes through the `className` prop. Here is an example of customizing the card's background, padding, and border radius:

```tsx
<NeonGradientCard className="bg-gray-800 p-6 rounded-lg shadow-lg">
  <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
    Customized Neon Gradient Card
  </span>
</NeonGradientCard>
```

### Changing the Gradient Colors

You can change the gradient colors by modifying the `from` and `to` values in the `bg-gradient-to-br` class. Here is an example:

```jsx
<NeonGradientCard className="max-w-sm items-center justify-center text-center">
  <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff7e5f] from-35% to-[#feb47b] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
    Neon Gradient Card
  </span>
</NeonGradientCard>
```

### Adjusting the Text Styles

You can customize the text styles by modifying the classes applied to the `span` element. For example, you can change the font size, weight, and shadow:

```tsx
<NeonGradientCard className="max-w-sm items-center justify-center text-center">
  <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-4xl font-semibold leading-normal tracking-normal text-transparent dark:drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
    Custom Text Styles
  </span>
</NeonGradientCard>
```

## Example Usage

```tsx
import React from 'react';
import NeonGradientCard from '@/components/magicui/neon-gradient-card';

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <NeonGradientCard className="max-w-sm items-center justify-center text-center">
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Neon Gradient Card
        </span>
      </NeonGradientCard>
    </div>
  );
};

export default App;
```

## Notes

- Ensure you have appropriate styles in place for the `neon-gradient-card` class to achieve the desired neon gradient effect.
- You can customize the gradient colors, text styles, and other properties as per your project requirements.

<---------------------------------------------- NeonGradientCard Component ------------------------------------------------->

*Credits: magicui.design*
