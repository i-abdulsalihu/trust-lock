"use client";

import { BsChatDots } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchBar from "@/components/shared/search-bar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useWallet } from "@/hooks/useWallet";
import { Button } from "@/components/ui/button";
import Accounts from "./accounts";
import { Separator } from "@/components/ui/separator";
import ConnectWallet from "../../(auth)/setup/_components/connect-wallet";
import Profile from "./profile";

const Header = () => {
  const { connectedAccount } = useWallet();

  return (
    <header className="sticky left-0 top-0 z-50 h-[72px] w-full bg-background">
      <div className="flex size-full items-center justify-between gap-6 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="flex md:hidden">
            <SidebarTrigger />
          </div>

          <SearchBar />
        </div>

        {connectedAccount ? (
          <div className="flex h-10 items-center">
            <div className="flex items-center gap-2">
              <Button variant={"secondary"} size="icon">
                <RiNotification3Line className="!size-5" />
              </Button>
              <Button variant={"secondary"} size="icon">
                <BsChatDots className="!size-5" />
              </Button>
            </div>

            <Separator orientation="vertical" className="mx-4 h-[60%]" />

            <div className="flex items-center gap-2">
              <Profile />
              <Accounts />
            </div>
          </div>
        ) : (
          <Dialog open>
            <DialogTrigger asChild>
              <Button>Connect Wallet</Button>
            </DialogTrigger>
            <DialogContent className="!max-w-md !p-0">
              <VisuallyHidden>
                <DialogHeader>
                  <DialogTitle />
                  <DialogDescription />
                </DialogHeader>
              </VisuallyHidden>

              <ConnectWallet />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </header>
  );
};

export default Header;
