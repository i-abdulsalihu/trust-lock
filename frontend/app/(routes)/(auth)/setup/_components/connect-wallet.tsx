"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { LuCircleCheck } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/useWallet";
import { siteConfig } from "@/config/site.config";
import { connectWallet } from "@/store/thuck/web3.thuck";
import { useSelector } from "react-redux";
import { RootState } from "@/config/store.config";
import { goToStep } from "@/store/slice/setup.slice";

const ConnectWallet = () => {
  const [selectedProvider, setSelectedProvider] =
    useState<EIP6963ProviderDetail | null>(null);
  const { dispatch, detectedProviders, status, connectedAccount } = useWallet();

  const { currentStep } = useSelector((state: RootState) => state.setup);

  useEffect(() => {
    if (connectedAccount && currentStep === 2) {
      dispatch(goToStep(3));
    }
  }, [dispatch, connectedAccount, currentStep]);

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col rounded-lg border bg-background px-8 py-12 shadow-sm sm:px-10">
      <div className="flex items-center gap-3">
        <Image
          src={siteConfig.favicon}
          alt={siteConfig.title}
          width={32}
          height={32}
          priority
          quality={100}
          className="object-contain"
        />
        <Image
          src="/svg/logo.svg"
          alt={siteConfig.title}
          width={120}
          height={30}
          priority
          quality={100}
          className="object-contain"
        />
      </div>

      <div className="mt-14 flex w-full flex-col sm:max-w-sm">
        <h1 className="text-3xl font-semibold tracking-tighter">
          Connect Your Wallet 🚀
        </h1>
        <p className="mt-1 text-base font-medium">
          TrustLock uses your wallet as your login—no passwords, no fuss.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-2">
        {detectedProviders.length > 0 ? (
          <Fragment>
            {detectedProviders.map((provider) => {
              const src = provider.info.icon.trim();
              const thisProvider =
                selectedProvider?.info.name.toLowerCase() ===
                provider.info.name.toLowerCase();

              return (
                <Button
                  size={"lg"}
                  key={provider.info.uuid}
                  variant={"outline"}
                  onClick={() => setSelectedProvider(provider)}
                  disabled={thisProvider || status === "connecting"}
                  className="flex !h-14 items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={src}
                      alt={provider.info.name}
                      width={24}
                      height={24}
                      priority
                      quality={100}
                    />
                    <span className="font-medium tracking-wide">
                      {provider.info.name}
                    </span>
                  </div>

                  {selectedProvider && thisProvider && (
                    <LuCircleCheck className="!size-5 text-primary" />
                  )}
                </Button>
              );
            })}

            <Button
              size={"lg"}
              disabled={!selectedProvider || status === "connecting"}
              isLoading={status === "connecting"}
              loadingText="Connecting..."
              onClick={() =>
                dispatch(
                  connectWallet(selectedProvider as EIP6963ProviderDetail),
                )
              }
              className="mt-2 w-full font-medium tracking-tight"
            >
              <svg
                className="!size-5"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3335 12.0623C13.3335 12.7526 13.8932 13.3123 14.5835 13.3123C15.2738 13.3123 15.8335 12.7526 15.8335 12.0623C15.8335 11.3719 15.2738 10.8123 14.5835 10.8123C13.8932 10.8123 13.3335 11.3719 13.3335 12.0623Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.33317 6.22884H13.3332C15.6902 6.22884 16.8687 6.22884 17.6009 6.96107C18.3332 7.69331 18.3332 8.87184 18.3332 11.2288V12.8955C18.3332 15.2525 18.3332 16.431 17.6009 17.1633C16.8687 17.8955 15.6902 17.8955 13.3332 17.8955H8.33317C5.19047 17.8955 3.61913 17.8955 2.64281 16.9192C1.6665 15.9429 1.6665 14.3715 1.6665 11.2288V9.56217C1.6665 6.41947 1.6665 4.84813 2.64281 3.87182C3.61913 2.89551 5.19047 2.89551 8.33317 2.89551H11.6665C12.4415 2.89551 12.829 2.89551 13.1469 2.98069C14.0096 3.21186 14.6835 3.88573 14.9147 4.74846C14.9998 5.06637 14.9998 5.45387 14.9998 6.22884"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span>Connect Wallet</span>
            </Button>
          </Fragment>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;
