"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

import { Wrapper } from "./wrapper";
import { Button } from "@/components/ui/button";

interface UnderConstructionProps {
  title?: string;
  message?: string;
  returnPath?: string;
  returnLabel?: string;
}

const UnderConstruction: FC<UnderConstructionProps> = ({
  title = "Page Under Construction",
  message = "We're working hard to bring you this feature. Please check back soon!",
  returnPath = "/dashboard",
  returnLabel = "Return Home",
}) => {
  const router = useRouter();

  return (
    <div className="flex-1 py-4 sm:px-6 md:py-6 lg:py-10">
      <Wrapper className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-base font-medium tracking-wide">{message}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button onClick={() => router.push(returnPath)} className="gap-2">
            <Home className="h-4 w-4" />
            {returnLabel}
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default UnderConstruction;
