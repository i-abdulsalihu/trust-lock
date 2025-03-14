import Image from "next/image";
import { Fragment, useState } from "react";
import { PiPlugs, PiPlugsConnectedDuotone } from "react-icons/pi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from "@/hooks/useWallet";
import { formatAddress, generateAvatar } from "@/lib/utils";

const Accounts = () => {
  const { accounts, connectedAccount } = useWallet();

  const [showAccounts, setShowAccounts] = useState<boolean>(false);

  const otherAccounts = accounts.filter(
    (addr: string) => addr !== connectedAccount,
  );

  return (
    <DropdownMenu
      defaultOpen={showAccounts}
      onOpenChange={() => setShowAccounts(!showAccounts)}
    >
      <DropdownMenuTrigger asChild>
        <div role="button" className="size-10 rounded-md bg-secondary">
          <div className="size-full rounded-full p-[5px]">
            <div className="relative size-full rounded-full">
              <Image
                fill
                priority
                quality={100}
                alt={connectedAccount as string}
                src={generateAvatar(connectedAccount as string)}
                className="size-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2 w-[280px] rounded-2xl">
        {accounts.length === 0 ? (
          <DropdownMenuItem className="flex h-16 items-center justify-center rounded-xl focus:bg-transparent">
            <p className="text-sm tracking-wide">No wallet connected</p>
          </DropdownMenuItem>
        ) : (
          <Fragment>
            {/* Connected Account */}
            <DropdownMenuLabel>Active Account</DropdownMenuLabel>
            <DropdownMenuItem className="h-14 rounded-xl bg-secondary/50">
              <div className="flex size-full items-center gap-2 rounded-xl">
                <div className="size-10 rounded-full">
                  <Image
                    src={generateAvatar(connectedAccount as string)}
                    alt={connectedAccount as string}
                    width={40}
                    height={40}
                    priority
                    quality={100}
                    className="size-full rounded-full object-cover"
                  />
                </div>

                <div className="flex flex-1 items-center gap-4">
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold tracking-wide">...</h4>
                    <p className="text-xs font-medium text-muted-foreground">
                      {formatAddress(connectedAccount as string)}
                    </p>
                  </div>
                  <PiPlugsConnectedDuotone className="ml-auto mr-2 !size-[21px] text-primary" />
                </div>
              </div>
            </DropdownMenuItem>

            {/* Other Accounts */}
            {otherAccounts.length > 0 && (
              <Fragment>
                <DropdownMenuLabel>Connected Accounts</DropdownMenuLabel>
                {otherAccounts.map((addr: string) => (
                  <DropdownMenuItem
                    key={addr}
                    disabled={connectedAccount !== addr}
                    className="h-14 rounded-xl"
                  >
                    <div className="flex size-full items-center gap-2 rounded-xl">
                      <div className="size-10 rounded-full">
                        <Image
                          src={generateAvatar(addr)}
                          alt={addr}
                          width={40}
                          height={40}
                          priority
                          quality={100}
                          className="size-full rounded-full object-cover"
                        />
                      </div>

                      <div className="flex flex-1 items-center gap-4">
                        <div className="flex flex-col">
                          <h4 className="text-sm font-medium tracking-wide">
                            ...
                          </h4>
                          <p className="text-xs font-normal text-muted-foreground">
                            {formatAddress(addr)}
                          </p>
                        </div>
                        <PiPlugs className="ml-auto mr-2 !size-[21px] text-muted-foreground" />
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className="cursor-default focus:bg-transparent">
                  <p className="text-xs font-medium tracking-wide text-muted-foreground">
                    Switch accounts directly from Metamask.
                  </p>
                </DropdownMenuItem>
              </Fragment>
            )}
          </Fragment>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Accounts;
