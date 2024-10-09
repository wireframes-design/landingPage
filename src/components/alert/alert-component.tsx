// import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

// import {
//   Alert,
//   AlertDescription,
//   AlertTitle,
// } from "@/components/ui/alert";

// interface AlertComponentProps {
//     title: string;
//     description: string;
//     variant: string;
// }

// const AlertComponent: React.FC<AlertComponentProps> = ({ title, description, variant }) {
//   return (
//     <Alert variant={variant}>
//       <ExclamationTriangleIcon className="h-4 w-4" />
//       <AlertTitle>{title}</AlertTitle>
//       <AlertDescription>{description}</AlertDescription>
//     </Alert>
//   );
// }

// import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";

interface AlertComponentProps {
  title?: string;
  description?: string;
  backgroundColor?: string;
  variant?: "default" | "destructive" | undefined;
  textColor?: string;
  icon?: React.ReactNode;
  autoDismiss?: boolean; // Optional prop to enable auto-dismiss
  dismissTime?: number;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  title,
  description,
  backgroundColor,
  variant,
  textColor,
  icon,
  autoDismiss = true, // Default to true
  dismissTime = 5000, // Default to 5000 milliseconds (5 seconds)
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, dismissTime);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTime]);

  if (!visible) return null;

  return (
    <Alert
      variant={`${variant}`}
      className={`fixed top-12 left-1/2 transform -translate-x-1/2 mt-4 w-full max-w-screen-md z-50 text-start bg-${backgroundColor} text-${textColor}`}
    >
      {/* <ExclamationTriangleIcon className="h-4 w-4" /> */}
      <div className="flex">
        <div>{icon && <div className="mr-2">{icon}</div>}</div>
        <div>
          <AlertTitle className="font-bold">{title}</AlertTitle>
          <AlertDescription className="text-sm">{description}</AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default AlertComponent;
