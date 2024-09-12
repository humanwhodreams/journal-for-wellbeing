import * as React from "react";

import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12", className)}>
      {children}
    </div>
  );
}
