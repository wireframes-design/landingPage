// "use client";

// import { cn } from "@/lib/utils";
// import { AnimatedList } from "@/wireframes/components/animated-list";
// import { Notification } from "@/components/list/notification-component";
// import { ReactNode } from "react";

// interface AnimatedListProps{
//   children?: string;
// }

// export function AnimatedListDemo({ className }: { className?: string }) {
//   return (
//     <div
//       className={cn(
//         "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
//         className
//       )}
//     >
//       <AnimatedList>
//         <>{children}</>
//       </AnimatedList>
//     </div>
//   );
// }

// "use client";

// import { cn } from "@/lib/utils";
// import { AnimatedList } from "@/wireframes/components/animated-list";
// import { ReactNode } from "react";

// interface AnimatedListDemoProps {
//   className?: string;
//   children?: ReactNode;
// }

// export function AnimatedListDemo({ className, children }: AnimatedListDemoProps) {
//   return (
//     <div
//       className={cn(
//         "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
//         className
//       )}
//     >
//       <AnimatedList>
//         {children}
//       </AnimatedList>
//     </div>
//   );
// }





"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AnimatedList } from "@/wireframes/components/animated-list";
import { Notification } from "@/components/list/notification-component";

interface AnimatedListDemoProps {
  className?: string;
  notifications: {
    title?: string;
    description?: string;
    icon?: string;
    color?: string;
    time?: string;
  }[];
}

export function AnimatedListDemo({ className, notifications }: AnimatedListDemoProps) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((notification, idx) => (
          <Notification key={idx} {...notification} />
        ))}
      </AnimatedList>
    </div>
  );
}

