import * as React from "react";

import { cn } from "@/lib/cn";
import { focusInput, hasErrorInput } from "./focus";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  `flex w-full rounded-md border border-input text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 hover:border-ring ${focusInput}`,
  {
    variants: {
      variant: {
        default: "bg-background",
        secondary: "bg-secondary",
        muted: "bg-muted",
      },
      dimension: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-3 py-1.5 rounded-md",
        lg: "h-11 px-4 py-2 rounded-md",
      },
      hasError: {
        true: hasErrorInput,
        fasle: focusInput,
      },
    },
    defaultVariants: {
      variant: "default",
      dimension: "default",
      hasError: "fasle",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, dimension, hasError, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, dimension, hasError, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
