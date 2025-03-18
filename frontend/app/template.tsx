"use client";

import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { Fragment, ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";

import { storeConfig } from "@/config/store.config";
import { SidebarProvider } from "@/components/ui/sidebar";
import Web3Provider from "@/components/provider/web3.provider";
import AccountProvider from "@/components/provider/account.provider";

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Provider store={storeConfig}>
      <Web3Provider>
        <SidebarProvider>
          <AccountProvider>
            <Toaster richColors />
            <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
            <Fragment>{children}</Fragment>
          </AccountProvider>
        </SidebarProvider>
      </Web3Provider>
    </Provider>
  );
}
