# CheckboxDemo Component

The `CheckboxDemo` component is a customizable checkbox component for React applications, designed with Tailwind CSS for styling. It allows for easy integration and customization within your project.

## Features

- **Customizable Checkbox**: Offers flexibility to customize the checkbox appearance and behavior.
- **Label Support**: Provides an option to include a label alongside the checkbox.
- **State Management**: Manages checkbox state internally with an option to handle state changes externally.

## Usage

### Import and Use

1. **Import the component**:

    ```typescript
    import CheckboxDemo from '@/components/CheckboxDemo';
    ```

2. **Use the component in your JSX**:

    ```typescript
    <CheckboxDemo
      name="exampleCheckbox"
      label="I agree to the terms and conditions"
      checked={true}
      onCheckedChange={(checked) => console.log(checked)}
    />
    ```

## Props


| Prop Name           | Type             | Description                                          |
| ------------------- | ---------------- | ---------------------------------------------------- |
| `name`              | `string`         | The name attribute for the checkbox input.           |
| `label`             | `string`         | The label to display alongside the checkbox.         |
| `checked`           | `boolean`        | The initial checked state of the checkbox. Default is `false`.|
| `onCheckedChange`   | `(checked: boolean) => void`| Callback function to handle state changes when the checkbox is checked or unchecked. |
| `className`         | `string`         | Additional classes for custom styling. Default is an empty string.                     |


## Example

```typescript
import React from "react";
import CheckboxDemo from '@/components/CheckboxDemo';

const App: React.FC = () => {
  const handleCheckboxChange = (checked: boolean) => {
    console.log(`Checkbox is now ${checked ? "checked" : "unchecked"}`);
  };

  return (
    <div className="container mx-auto p-4">
      <CheckboxDemo
        name="exampleCheckbox"
        label="I agree to the terms and conditions"
        checked={true}
        onCheckedChange={handleCheckboxChange}
      />
    </div>
  );
};

export default App;
```

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/docs/components/checkbox)