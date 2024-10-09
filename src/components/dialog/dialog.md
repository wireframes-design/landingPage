# DialogComponent

The `DialogComponent` is a customizable dialog component for React applications, built with Tailwind CSS for styling. It provides a flexible way to display modal dialogs with optional triggers and content.

## Features

- **Dialog Visibility Control**: Manage the visibility of the dialog with `open` and `setOpen` props.
- **Customizable Trigger**: Optionally include a trigger button to open the dialog.
- **Flexible Content**: Display custom content within the dialog.
- **Custom Styling**: Apply custom styles to the dialog content.

## Usage

### Import and Use

1. **Import the component**:

   ```typescript
   import DialogComponent from "@/components/DialogComponent";
   ```

2. **Use the component in your JSX**:

   ```typescript
   import React, { useState } from "react";
   import DialogComponent from "@/components/DialogComponent";
   import { Button } from "@/components/ui/button";

   const App: React.FC = () => {
     const [isOpen, setIsOpen] = useState(false);

     return (
       <div className="container mx-auto p-4">
         <DialogComponent
           open={isOpen}
           setOpen={setIsOpen}
           dialogTitle="Dialog Title"
           dialogDescription="This is a description for the dialog."
           triggerButtonText="Open Dialog"
           isButton={true}
         >
           <p>This is the content inside the dialog.</p>
         </DialogComponent>
       </div>
     );
   };

   export default App;
   ```

## Props

| Prop Name                | Type                  | Description                                                |
| ------------------------ | --------------------- | ---------------------------------------------------------- |
| `open`                   | `boolean`             | Controls whether the dialog is open or closed.             |
| `setOpen`                | `(open: boolean) => void` | Function to set the dialog's open state.               |
| `dialogTitle`            | `string`              | Title of the dialog.                                       |
| `dialogDescription`      | `string`              | Description of the dialog.                                 |
| `classNameDialogContent` | `string`              | Custom classes for styling the dialog content.             |
| `children`               | `ReactNode`           | Content to display inside the dialog.                      |
| `triggerButtonText`      | `string`              | Text for the trigger button to open the dialog.            |
| `isButton`               | `boolean`             | If `true`, a trigger button is rendered to open the dialog.|


## Example

```typescript
import React, { useState } from "react";
import DialogComponent from '@/components/DialogComponent';
import { Button } from "@/components/ui/button";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <DialogComponent
        open={isOpen}
        setOpen={setIsOpen}
        dialogTitle="Dialog Title"
        dialogDescription="This is a description for the dialog."
        triggerButtonText="Open Dialog"
        isButton={true}
      >
        <p>This is the content inside the dialog.</p>
      </DialogComponent>
    </div>
  );
};

export default App;
```

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/docs/components/dialog)