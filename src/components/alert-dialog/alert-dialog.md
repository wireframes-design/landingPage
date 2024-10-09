### AlertDialog Component
This repository contains customizable UI components built with React and TypeScript. An AlertDialog component, all of which leverage utility classes for styling and support various properties for customization.

## Features

- Customizable dialog title, description, and buttons
- Custom styling for the trigger button and dialog content
- Supports different variants (default, destructive)

## Usage

1. Import the component:

    ```typescript
    import AlertDialogComponent from '@/components/AlertDialogComponent';
    ```

2. Use the component in your JSX:

    ```typescript
    <AlertDialogComponent
      dialogTitle="Are you sure?"
      dialogDescription="This action cannot be undone."
      cancelBtnText="Cancel"
      saveBtnText="Save"
      titleColor="text-red-500"
      triggerBtnColor="bg-accent text-secondary"
    />
    ```

## Props

### AlertDialog Component

| Prop Name           | Type             | Description                                          |
| ------------------- | ---------------- | ---------------------------------------------------- |
| `dialogTitle`       | `string`         | The title text for the dialog.                       |
| `dialogDescription` | `string`         | The description text for the dialog.                 |
| `cancelBtnText`     | `string`         | Text for the cancel button.                          |
| `saveBtnText`       | `string`         | Text for the save button.                            |
| `titleColor`        | `string`         | Color for the title text.                            |
| `backgroundColor`   | `string`         | Background color for the dialog.                     |
| `variant`           | `"default" \| "destructive"` | The variant of the dialog.               |
| `icon`              | `ReactNode`      | Icon to be displayed alongside the dialog text.      |
| `autoDismiss`       | `boolean`        | Enables auto-dismiss functionality.                  |
| `dismissTime`       | `number`         | Time in milliseconds for auto-dismiss.               |
| `triggerBtnColor`   | `string`         | Color for the trigger button.                        |


## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/docs/components/alert-dialog)