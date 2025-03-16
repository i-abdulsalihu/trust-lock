import React, { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { IoCopyOutline } from "react-icons/io5";
import { TbCopyCheckFilled } from "react-icons/tb";

import { cn, formatAddress } from "@/lib/utils";
import { toast } from "sonner";

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean;
  content?: string;
}

const Clipboard = React.forwardRef<HTMLSpanElement, SpanProps>(
  ({ className, asChild, content, children, ...props }, ref) => {
    const [copied, setCopied] = useState(false);
    const Comp = asChild ? Slot : "span";

    const handleCopy = async () => {
      if (content) {
        try {
          await navigator.clipboard.writeText(content);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          toast.success(
            `"${formatAddress(content)}" has be copied to clipboard`,
          );
        } catch (error) {
          console.error("Failed to copy:", error);
        }
      }
    };

    return (
      <Comp
        {...props}
        ref={ref}
        onClick={handleCopy}
        className={cn("flex cursor-pointer items-center gap-2", className)}
      >
        {children}
        {copied ? (
          <TbCopyCheckFilled className="size-[inherit] text-green-600" />
        ) : (
          <IoCopyOutline className="size-[inherit]" />
        )}
      </Comp>
    );
  },
);

Clipboard.displayName = "Clipboard";

export { Clipboard };
