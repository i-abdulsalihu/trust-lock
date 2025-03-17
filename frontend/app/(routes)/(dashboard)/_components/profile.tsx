"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { RiUser6Line } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatAddress, generateAvatar } from "@/lib/utils";
import { useWallet } from "@/hooks/useWallet";
import { disconnectWallet } from "@/store/thuck/web3.thuck";

const Profile = () => {
  const { connectedAccount, dispatch } = useWallet();

  const [showAccounts, setShowAccounts] = useState<boolean>(false);

  return (
    <DropdownMenu
      defaultOpen={showAccounts}
      onOpenChange={() => setShowAccounts(!showAccounts)}
    >
      <DropdownMenuTrigger asChild>
        <div role="button" className="size-10 rounded-md bg-[#F2F2F2]">
          <div className="size-full rounded-full p-1.5">
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
        <DropdownMenuGroup>
          <DropdownMenuItem className="h-16 rounded-xl bg-secondary/50">
            <div className="flex size-full items-center gap-2 rounded-xl">
              <div className="size-10 rounded-full">
                <Image
                  src={generateAvatar(connectedAccount as string)}
                  alt={connectedAccount as string}
                  width={40}
                  height={40}
                  quality={100}
                  priority
                  className="size-full rounded-full object-cover"
                />
              </div>

              <div className="flex flex-1 items-end gap-4">
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium tracking-wide">
                    Anonymous
                  </h4>
                  <p className="text-sm font-normal text-muted-foreground">
                    {formatAddress(connectedAccount as string)}
                  </p>
                </div>
                <p className="ml-auto mr-2 text-sm font-medium text-primary">
                  $300
                </p>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link href="/dashboard">
            <DropdownMenuItem className="h-12 gap-3 rounded-xl px-4 [&_svg]:size-5">
              <RiUser6Line />
              <span className="font-medium tracking-wide">Profile</span>
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href="/settings">
            <DropdownMenuItem className="h-12 gap-3 rounded-xl px-4 [&_svg]:size-5">
              <HiOutlineCog6Tooth />
              <span className="font-medium tracking-wide">Settings</span>
              <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => dispatch(disconnectWallet())}
            className="h-12 gap-3 rounded-xl px-4 focus:bg-destructive/10 focus:text-destructive [&_svg]:size-5"
          >
            <VscSignOut />
            <span className="font-medium tracking-wide">Sign Out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
