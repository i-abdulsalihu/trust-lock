"use client";

import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/useWallet";
import { formatAddress } from "@/lib/utils";
import { connectWallet, disconnectWallet } from "@/store/thuck/web3.thuck";
import Image from "next/image";

export default function Home() {
  const {
    dispatch,
    detectedProviders,
    accounts,
    isMetaMaskInstalled,
    chainId,
    status,
  } = useWallet();

  return (
    <div>
      <div className="providers">
        {detectedProviders.length > 0 ? (
          accounts.length > 0 ? (
            <Button
              variant={"destructive"}
              onClick={() => dispatch(disconnectWallet())}
            >
              disconnect
            </Button>
          ) : (
            detectedProviders.map((provider) => {
              const src = provider.info.icon.trim();

              return (
                <Button
                  variant={"secondary"}
                  key={provider.info.uuid}
                  onClick={() => dispatch(connectWallet(provider))}
                  disabled={status === "connecting"}
                >
                  <Image
                    src={src}
                    alt={provider.info.name}
                    priority
                    quality={100}
                    width={24}
                    height={24}
                  />
                  <div>{provider.info.name}</div>
                </Button>
              );
            })
          )
        ) : (
          <div>No Announced Wallet Providers</div>
        )}
      </div>
      <hr />
      <div>Status: {status}</div>
      <div>Metamask Installed: {isMetaMaskInstalled ? "Yes" : "No"}</div>
      {accounts.length > 0 && (
        <>
          <h3>Connected Account:</h3>
          <p>{formatAddress(accounts[0])}</p>
          <p>Chain ID: {chainId}</p>
        </>
      )}
    </div>
  );
}
