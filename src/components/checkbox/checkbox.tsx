import React, { useState } from "react";
// import { Checkbox } from "../ui/checkbox";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxProps {
  name: string;
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}
const CheckboxDemo: React.FC<CheckboxProps> = ({
  name,
  label,
  checked = false,
  onCheckedChange,
  className = "",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        name={name}
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
        className={`peer h-[1rem] w-[18px] p-0 rounded-none border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=${checked}]:bg-foreground data-[state=${checked}]:border-muted-foreground data-[state=${checked}]:text-background dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:data-[state=${checked}]:bg-foreground dark:data-[state=${checked}]:text-gray-900 ${className}`}
      />

      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxDemo;
