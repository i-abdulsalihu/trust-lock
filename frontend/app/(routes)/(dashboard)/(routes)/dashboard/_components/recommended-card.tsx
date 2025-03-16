"use client";

import Image from "next/image";

import { useWallet } from "@/hooks/useWallet";
import { generateAvatar } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const RecommendedCard = () => {
  const { connectedAccount } = useWallet();

  return (
    <div className="flex w-full flex-col gap-6 rounded-3xl border bg-background p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-muted-foreground">
            Recommended Projects
          </h2>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative size-12 overflow-hidden rounded-md bg-secondary">
            {connectedAccount && (
              <Image
                src={generateAvatar(connectedAccount)}
                alt={connectedAccount}
                fill
                priority
                quality={100}
                className="size-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col">
            <p className="line-clamp-1 text-base font-medium">Micheal Jones</p>
            <span className="line-clamp-1 text-sm font-normal">
              michealjones121@gmail.com
            </span>
          </div>
        </div>

        <div className="mb-8 mt-4 flex flex-col gap-1">
          <h2 className="line-clamp-1 text-base font-semibold text-primary">
            Need a Designer to form a brand identity for my business
          </h2>
          <p className="line-clamp-3 text-sm leading-6">
            I&apos;m looking for branding services to help bring my vision for
            Ask of Hood to life. I want a brand identity that&apos;s bold, edgy,
            and streetwise, something that really connects with young, urban
            street-wear lovers who care about authenticity and making a
            statement.
          </p>
        </div>

        <div className="flex w-full items-center justify-between rounded-md border bg-secondary p-3 pl-4">
          <p className="text-sm">
            $500/month -{" "}
            <span className="font-semibold text-primary">Full Time</span>
          </p>

          <Button size={"sm"} className="text-sm font-medium">
            Apply now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;
