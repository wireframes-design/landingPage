import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DialogComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogTitle?: string;
  dialogDescription?: string;
  classNameDialogContent?: string;
  children?: ReactNode;
  triggerButtonText?: string;
  isButton?: boolean;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  open,
  setOpen,
  children,
  classNameDialogContent,
  triggerButtonText,
  dialogTitle,
  dialogDescription,
  isButton,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {isButton && (
        <DialogTrigger asChild>
          <Button variant="outline">{triggerButtonText}</Button>
        </DialogTrigger>
      )}
      <DialogContent className={cn(classNameDialogContent)}>
        <DialogHeader>
          <DialogTitle className="text-accent">{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
