
### Card Component



## Features

- Customizable children elements
- Custom styling through class names
- Hover effects for scale and shadow

## Usage

1. Import the component:

    ```typescript
    import Card from '@/components/Card';
    ```

2. Use the component in your JSX:

    ```typescript
    <Card className="your-custom-class">
      <h2 className="text-xl font-bold mb-4">Card Title</h2>
      <p>This is some content inside the card.</p>
    </Card>
    ```

## Props


| Prop Name    | Type            | Description                              |
| ------------ | --------------- | ---------------------------------------- |
| `children`   | `ReactNode`     | Content to be displayed inside the card. |
| `className`  | `string`        | Custom class for the card.               |



## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/docs/components/card)