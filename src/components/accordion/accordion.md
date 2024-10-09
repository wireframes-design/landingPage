# Accordion Component

This is a customizable Accordion component built with React and TypeScript. It leverages utility classes for styling and supports various properties for customization.

## Features

- Customizable question and answer text
- Custom styling through class names
- Optional properties for buttons, colors etc
- Collapsible accordion items


## Usage

Here's how to use the Accordion component in your project:

1. Import the component:

    ```typescript
    import AccordionComponent from '@/components/AccordionComponent';
    ```

2. Use the component in your TSX:

    ```typescript
    <AccordionComponent
      question="What is your question?"
      answer="This is the answer."
      classNameAccordion="your-accordion-class"
      classNameAccordionTrigger="your-trigger-class"
    />
    ```

## Props

| Prop Name                     | Type            | Description                                          |
| ----------------------------  | --------------- | ---------------------------------------------------- |
| `question`                    | `string`        | The question text for the accordion trigger.         |
| `answer`                      | `string`        | The answer text for the accordion content.           |
| `classNameAccordion`          | `string`        | Custom class for the accordion.                      |
| `classNameAccordionTrigger`   | `string`        | Custom class for the accordion trigger.              |


## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/docs/components/accordion)

