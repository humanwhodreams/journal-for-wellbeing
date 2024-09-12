import * as React from "react";

import { Container } from "./container";
import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: Props) {
  return (
    <section id={id} className={cn("max-w-5xl mx-auto py-8", className)}>
      <Container>{children}</Container>
    </section>
  );
}
