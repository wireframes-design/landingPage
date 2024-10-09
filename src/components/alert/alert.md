
### Alert Component
This repository contains customizable UI components built with React and TypeScript. It includes an Accordion component and an Alert component, both of which leverage utility classes for styling and support various properties for customization.


## Features
- Customizable title, description, and icon
- Supports different variants (default, destructive)
- Optional auto-dismiss functionality with configurable dismiss time
- Customizable background and text colors


## Usage

1. Import the component:

    ```typescript
    import AlertComponent from '@/components/AlertComponent';
    ```

2. Use the component in your JSX:

    ```typescript
    import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

    <AlertComponent
      title="Warning!"
      description="This is a warning alert."
      backgroundColor="yellow-100"
      variant="destructive"
      textColor="yellow-700"
      icon={<ExclamationTriangleIcon />}
      autoDismiss={true}
      dismissTime={5000}
    />
    ```

## Props


| Prop Name          | Type             | Description                                          |
| ------------------ | ---------------- | ---------------------------------------------------- |
| `title`            | `string`         | The title text for the alert.                        |
| `description`      | `string`         | The description text for the alert.                  |
| `backgroundColor`  | `string`         | Background color for the alert.                      |
| `variant`          | `"default" \| "destructive"` | The variant of the alert.                |
| `textColor`        | `string`         | Text color for the alert.                            |
| `icon`             | `ReactNode`      | Icon to be displayed alongside the alert text.       |
| `autoDismiss`      | `boolean`        | Enables auto-dismiss functionality.                  |
| `dismissTime`      | `number`         | Time in milliseconds for auto-dismiss.               |


## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/docs/components/alert)