import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
interface AccordionComponentProps {
  question?: string;
  answer?: string;
  classNameAccordion?: string;
  classNameAccordionTrigger?: string;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  question,
  answer,
  classNameAccordion,
  classNameAccordionTrigger,
}) => {
  return (
    <Accordion className={cn(classNameAccordion)} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={cn(classNameAccordionTrigger)}>
          {question}
        </AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
