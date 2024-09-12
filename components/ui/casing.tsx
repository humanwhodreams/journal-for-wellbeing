import * as React from "react";

import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Casing({ children, className }: Props) {
  return (
    <div className={cn("rounded-xl bg-accent", className)}>{children}</div>
  );
}

interface HeaderProps extends Pick<Props, "children"> {}

function Header({ children }: Partial<HeaderProps>) {
  return (
    <header className="flex items-center justify-between px-4 pt-4">
      {children}
    </header>
  );
}
Casing.Header = Header;

function Title({ children }: Partial<HeaderProps>) {
  return <h3 className={cn("text-muted-foreground")}>{children}</h3>;
}
Casing.Title = Title;

interface ContentProps extends Pick<Props, "children"> {
  className?: string;
}

function Content({ children, className }: ContentProps) {
  return (
    <div className={cn("px-4 pt-2 pb-4 rounded-lg w-full", className)}>
      {children}
    </div>
  );
}
Casing.Content = Content;

interface ContainerProps extends Pick<Props, "children"> {
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("p-6 flex flex-wrap md:flex-nowrap gap-4 rounded-md bg-background", className)}>
      {children}
    </div>
  );
}
Casing.Container = Container;
