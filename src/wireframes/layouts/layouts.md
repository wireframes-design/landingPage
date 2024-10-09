# Layouts

<---------------------------------------------- DefaultLayout Component ------------------------------------------------->

# DefaultLayout Component

The `DefaultLayout` component is a React component that provides a consistent layout for your application, including a header, main content area, and footer, all wrapped within a theme provider.

## Implementation

```tsx
import { ThemeProvider } from '@/wireframes/theme/theme-provider';
import React, { ReactNode } from 'react';

interface LayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ header, children, footer }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer>{footer}</footer>}
    </ThemeProvider>
  );
};

export default DefaultLayout;
```

## Usage

To use the `DefaultLayout` component:

1. Import the component into your desired React file.
2. Render the component within your JSX structure, passing the necessary props for `header`, `children`, and `footer`,
3. Customize the layout by providing different elements for the `header`, `children`, and `footer` props.

```tsx
const CustomPage = () => {
  return (
    <DefaultLayout
      header={<div>Custom Header</div>}
      footer={<div>Custom Footer</div>}
    >
      <div>Custom main content goes here.</div>
    </DefaultLayout>
  );
};

export default CustomPage;
```

## Props
1. `header` (ReactNode, optional): The content to be rendered in the header section of the layout.
2. `children` (ReactNode, required): The main content to be rendered in the main section of the layout.
3. `footer` (ReactNode, optional): The content to be rendered in the footer section of the layout.

## Customization

```tsx
const CustomPage = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="custom-theme-key">
      <DefaultLayout
        header={<div className="custom-header">Header with Custom Theme</div>}
        footer={<div className="custom-footer">Footer with Custom Theme</div>}
      >
        <div className="main-content">
          Main Content with Custom Theme
        </div>
      </DefaultLayout>
    </ThemeProvider>
  );
};

export default CustomPage;
```
The `DefaultLayout` component provides a flexible and customizable layout structure for your application, enhancing the consistency and user experience with a unified theme and layout.
<---------------------------------------------- DefaultLayout Component ------------------------------------------------->

