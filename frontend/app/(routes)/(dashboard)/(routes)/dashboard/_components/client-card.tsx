"use client";

import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/useWallet";
import { generateAvatar } from "@/lib/utils";
import Image from "next/image";
import { IoLogoWechat } from "react-icons/io5";

const ClientCard = () => {
  const { connectedAccount } = useWallet();

  return (
    <div className="flex w-full flex-col gap-6 rounded-3xl border bg-background p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-muted-foreground">Clients</h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div role="button" className="text-base font-medium text-primary">
            View all
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {Array.from({ length: 4 }).map((_, _key) => (
          <div
            key={_key}
            className="flex items-center gap-4 border-b py-4 first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0"
          >
            <div className="flex flex-1 items-center gap-2">
              <div className="relative size-12 overflow-hidden rounded-md bg-secondary">
                {connectedAccount && (
                  <Image
                    src={generateAvatar(`${connectedAccount}-${_key + 1}`)}
                    alt={`${connectedAccount}-${_key + 1}`}
                    fill
                    priority
                    quality={100}
                    className="size-full object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col">
                <p className="line-clamp-1 text-base font-medium">
                  Micheal Jones
                </p>
                <span className="line-clamp-1 text-sm font-normal">
                  michealjones121@gmail.com
                </span>
              </div>
            </div>

            <Button variant={"outline"} size={"icon"}>
              <IoLogoWechat className="!size-5 text-primary" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCard;
