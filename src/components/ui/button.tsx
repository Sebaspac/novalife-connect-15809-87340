import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-secondary text-white hover:bg-secondary/90 shadow-sm hover:shadow-md active:scale-[0.98]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-sm",
        outline:
          "border border-foreground/20 text-foreground bg-transparent hover:bg-foreground/5 active:scale-[0.98]",
        secondary:
          "bg-foreground text-background hover:bg-foreground/90 shadow-sm active:scale-[0.98]",
        ghost: "hover:bg-muted/50 hover:text-foreground",
        link: "text-secondary underline-offset-4 hover:underline hover:text-secondary/80",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 px-4 py-2 text-sm rounded-lg",
        lg: "h-14 px-8 py-4 text-lg rounded-2xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
