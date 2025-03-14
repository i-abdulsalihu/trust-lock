"use client";

import { useDispatch } from "react-redux";
import { Fragment, ReactNode, useEffect } from "react";

import { AppDispatch } from "@/config/store.config";
import {
  ethereum,
  setAccounts,
  setChainId,
  setConnectedAccount,
  setDetectedProviders,
  setIsMetaMaskInstalled,
  setStatus,
} from "@/store/slice/web3.slice";
import { useSyncProviders } from "@/hooks/useSyncProviders";

export default function Web3Provider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const dispatch = useDispatch<AppDispatch>();
  const providers = useSyncProviders();

  useEffect(() => {
    dispatch(setDetectedProviders(providers));
  }, [dispatch, providers]);

  useEffect(() => {
    if (!ethereum) {
      dispatch(setIsMetaMaskInstalled(false));
      dispatch(setStatus("disconnected"));
      return;
    }

    dispatch(setIsMetaMaskInstalled(true));
    dispatch(setStatus("connecting"));

    const handleAccountsChanged = (accounts: string[]) => {
      dispatch(setConnectedAccount(accounts[0] || null));
      dispatch(setAccounts(accounts));
      dispatch(setStatus(accounts.length ? "connected" : "disconnected"));
    };

    const handleChainChanged = (chainId: string) => {
      dispatch(setChainId(chainId));
    };

    const setupEthereum = async () => {
      try {
        const accounts = (await ethereum?.request({
          method: "eth_accounts",
        })) as string[];
        dispatch(setAccounts(accounts));

        const chainId = (await ethereum?.request({
          method: "eth_chainId",
        })) as string;
        dispatch(setChainId(chainId));

        dispatch(setStatus(accounts.length ? "connected" : "disconnected"));
      } catch (error) {
        console.error("Error setting up MetaMask:", error);
        dispatch(setStatus("error"));
      }

      // Set up listeners AFTER initial data fetching
      ethereum?.on("accountsChanged", handleAccountsChanged);
      ethereum?.on("chainChanged", handleChainChanged);
    };

    setupEthereum();

    return () => {
      if (ethereum?.removeListener) {
        ethereum?.removeListener("accountsChanged", handleAccountsChanged);
        ethereum?.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, [dispatch]);

  return <Fragment>{children}</Fragment>;
}
