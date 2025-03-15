import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const Wrapper = React.forwardRef<HTMLElement, WrapperProps>(
  ({ className, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "section";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(
          "mx-auto w-full max-w-[1108px] px-4 transition-all lg:max-w-screen-xl lg:px-6",
          className,
        )}
      >
        {children}
      </Comp>
    );
  },
);

Wrapper.displayName = "Wrapper";

export { Wrapper };
