
# IdentityCard Component

The `IdentityCard` component is a customizable card for displaying user identity information, such as a profile picture, name, title, and additional content. It uses Tailwind CSS for styling and provides a flexible structure for easy customization.

## Features

- **Profile Picture**: Displays a profile picture with a border.
- **User Name**: Shows the user's name in bold text.
- **User Title**: Displays the user's title in lighter text.
- **Additional Content**: Allows for additional content to be added within the card.

## Usage

### Import and Use

1. **Import the component**:

    ```typescript
    import IdentityCard from '@/components/IdentityCard';
    ```

2. **Use the component in your JSX**:

    ```typescript
    <IdentityCard
      profilePicture="https://example.com/path-to-image.jpg"
      name="John Doe"
      title="Software Engineer"
    >
      <p>This is some additional content inside the IdentityCard.</p>
    </IdentityCard>
    ```

## Props


| Prop Name        | Type            | Description                                      |
| ---------------- | --------------- | ------------------------------------------------ |
| `profilePicture` | `string`        | URL of the profile picture to display.           |
| `name`           | `string`        | Name of the user to display.                     |
| `title`          | `string`        | Title of the user to display.                    |
| `children`       | `React.ReactNode` | Additional content to display inside the card.    |

## Example

```typescript
import React from "react";
import IdentityCard from '@/components/IdentityCard';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <IdentityCard
        profilePicture="https://example.com/path-to-image.jpg"
        name="Jane Doe"
        title="Product Manager"
      >
        <p>Jane has over 10 years of experience in product management and has led numerous successful projects.</p>
      </IdentityCard>
    </div>
  );
};

export default App;
```

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/docs/components/card)