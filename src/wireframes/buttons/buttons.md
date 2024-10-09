# Buttons

## Buttons

- [Shimmer Button](https://wireframes.design/docs/components/shimmer-button)

## What this section should contain

- Different types of buttons
- Usage and customization of buttons

<------------------------------------------- ShimmerButtonDemo Component --------------------------------------------->

# ShimmerButtonDemo

This Markdown file explains the implementation and usage of the `ShimmerButtonDemo` component in a React application.

## Implementation

### Importing Components and Utilities

```tsx
import ShimmerButton from "@/components/magicui/shimmer-button";

export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
    </div>
  );
}
```
## Explanation

1. **Container Styling:** The `div` serves as a container with specific styles (`min-h-[16rem]`, `flex`, `items-center`, `justify-center`).
2. **ShimmerButton Component:** Utilizes the `ShimmerButton` component, which applies a shimmer effect.
3. **Inner Content:** Includes a `span` element for displaying text within the button.

## Example Usage
To use the `ShimmerButtonDemo` component:

1. Ensure the `ShimmerButton` component is imported correctly from its location (`@/components/magicui/shimmer-button`).
2. Render the `ShimmerButtonDemo` component within your application, typically within a parent component or a specific route.

```tsx
import { ShimmerButtonDemo } from './path/to/ShimmerButtonDemo';

function App() {
  return (
    <div className="App">
      <ShimmerButtonDemo />
    </div>
  );
}

export default App;
```
<------------------------------------------- ShimmerButtonDemo Component --------------------------------------------->

*Credits: magicui.design*
