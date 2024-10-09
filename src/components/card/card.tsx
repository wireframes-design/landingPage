import { cn } from '@/lib/utils';
import React from 'react';

interface CardProps{
    children?: any;
    className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn(`max-w-sm mx-auto my-4 p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl`, className)}>
      {children}
    </div>
  );
};

export default Card;
