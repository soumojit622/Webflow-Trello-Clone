import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    // Base styles
    "inline-flex cursor-pointer items-center justify-center gap-2",
    "whitespace-nowrap rounded-lg text-sm font-medium",
    "transition-colors duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    // SVG sizing
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-tr from-primary via-primary/90 to-primary/80 text-primary-foreground shadow-md hover:brightness-90 focus-visible:ring-primary/50",
        destructive:
          "bg-gradient-to-tr from-red-600 via-red-500 to-red-400 text-white shadow-md hover:brightness-90 focus-visible:ring-red-500/50",
        outline:
          "border border-primary text-primary bg-background/50 backdrop-blur-sm hover:bg-muted/70 hover:brightness-95 dark:hover:bg-muted/40 focus-visible:ring-primary/50",
        secondary:
          "bg-gradient-to-tr from-secondary via-secondary/85 to-secondary/75 text-secondary-foreground shadow-md hover:brightness-90 focus-visible:ring-secondary/50",
        ghost:
          "hover:bg-accent/50 hover:brightness-95 hover:text-accent-foreground dark:hover:bg-accent/40",
        link:
          "text-primary underline-offset-4 hover:underline hover:brightness-95",
        transparent: "bg-transparent text-white hover:bg-white/20",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-11 rounded-lg px-6 has-[>svg]:px-4 text-base",
        icon: "size-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
