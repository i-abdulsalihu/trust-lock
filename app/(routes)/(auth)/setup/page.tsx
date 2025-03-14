"use client";

import ConnectWallet from "./_components/connect-wallet";

import { RootState } from "@/config/store.config";
import { useSelector } from "react-redux";
import Welcome from "./_components/welcome";
import Congratulations from "./_components/congratulations";

export default function SetUpPage() {
  const { currentStep } = useSelector((state: RootState) => state.setup);

  return (
    <div className="flex h-dvh flex-col items-center justify-center p-6">
      {currentStep === 1 && <Welcome />}
      {currentStep === 2 && <ConnectWallet />}
      {currentStep === 3 && <Congratulations />}
    </div>
  );
}
