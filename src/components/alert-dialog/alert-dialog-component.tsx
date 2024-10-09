import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AlertDialogComponentProps {
  dialogTitle?: string;
  dialogDescription?: string;
  cancelBtnText?: string;
  saveBtnText?: string;
  titleColor?: string;
  backgroundColor?: string;
  variant?: "default" | "destructive" | undefined;
  textColor?: string;
  icon?: React.ReactNode;
  autoDismiss?: boolean; // Optional prop to enable auto-dismiss
  dismissTime?: number;
  triggerBtnColor?: string;
}

const AlertDialogComponent: React.FC<AlertDialogComponentProps> = ({
  dialogTitle,
  dialogDescription,
  cancelBtnText,
  saveBtnText,
  titleColor,
  triggerBtnColor,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={`${triggerBtnColor}`}>
        Open
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        {/* <AlertDialogHeader className="sm:w-2/5 md:w-3/4 lg:w-full xl:w-full 2xl:w-full"> */}
        <AlertDialogHeader>
          <AlertDialogTitle className={`${titleColor}`}>
            {dialogTitle}
          </AlertDialogTitle>
          <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelBtnText}</AlertDialogCancel>
          <AlertDialogAction>{saveBtnText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComponent;
