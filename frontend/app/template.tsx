"use client";

import { Provider } from "react-redux";
import { storeConfig } from "@/config/store.config";
import NextTopLoader from "nextjs-toploader";
import { Fragment, ReactNode } from "react";
import Web3Provider from "@/components/provider/web3.provider";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Provider store={storeConfig}>
      <Web3Provider>
        <SidebarProvider>
          <Toaster richColors />
          <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
          <Fragment>{children}</Fragment>
        </SidebarProvider>
      </Web3Provider>
    </Provider>
  );
}
