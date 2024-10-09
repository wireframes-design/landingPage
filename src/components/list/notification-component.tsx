// "use client";

// import { cn } from "@/lib/utils";
// import { ReactNode } from "react";

// interface NotificationProps {
//   children?: ReactNode;
// }

// const notifications = [
//     {
//       name: "Payment received",
//       description: "Magic UI",
//       time: "15m ago",
//       icon: "💸",
//       color: "#00C9A7",
//     },
//     {
//       name: "User signed up",
//       description: "Magic UI",
//       time: "10m ago",
//       icon: "👤",
//       color: "#FFB800",
//     },
//     {
//       name: "New message",
//       description: "Magic UI",
//       time: "5m ago",
//       icon: "💬",
//       color: "#FF3D71",
//     },
//     {
//       name: "New event",
//       description: "Magic UI",
//       time: "2m ago",
//       icon: "🗞️",
//       color: "#1E86FF",
//     },
//   ];

// export const Notification = ({ children }: NotificationProps) => {
//   return (
//     <figure
//       className={cn(
//         "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
//         // animation styles
//         "transition-all duration-200 ease-in-out hover:scale-[103%]",
//         // light styles
//         "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
//         // dark styles
//         "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
//       )}
//     >
//       {/* {children}  */}
//       <div className="flex flex-row items-center gap-3">
//         <div
//           className="flex size-10 items-center justify-center rounded-2xl"
//           style={{ backgroundColor: color }}
//         >
//           <span className="text-lg">{icon}</span>
//         </div>
//         <div className="flex flex-col overflow-hidden">
//           <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
//             <span className="text-sm sm:text-lg">{name}</span>
//             <span className="mx-1">·</span>
//             <span className="text-xs text-gray-500">{time}</span>
//           </figcaption>
//           <p className="text-sm font-normal dark:text-white/60">
//             {description}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// };

"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NotificationProps {
  title?: string;
  description?: string;
  icon?: string;
  color?: string;
  time?: string;
  children?: ReactNode;
}

export const Notification = ({
  title,
  description,
  icon,
  color,
  time,
  children,
}: NotificationProps) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        {icon && color && (
          // <div
          //   className="flex size-10 items-center justify-center rounded-2xl"
          //   style={{ backgroundColor: color }}
          // >
          //   <span className="text-lg">{icon}</span>
          // </div>
          <div
            // className={`flex items-center justify-center rounded-2xl bg-${color} sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32`}
            className={`flex items-center justify-center rounded-2xl bg-${color} p-2 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 sm:max-w-16 sm:max-h-8 md:max-w-24 md:max-h-12 lg:max-w-32 lg:max-h-16`}
            // style={{ backgroundColor: color }}
          >
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl">
              {icon}
            </span>
          </div>
        )}
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{title}</span>
             <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 text-start">
            {description}
          </p>
        </div>
      </div>
      {children && <div className="mt-2">{children}</div>}
    </figure>
  );
};
