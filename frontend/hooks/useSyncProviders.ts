import { useSyncExternalStore } from "react";
import { metamaskConfig } from "@/config/metamask.config";

export const useSyncProviders = (): EIP6963ProviderDetail[] => {
  return useSyncExternalStore(
    metamaskConfig.subscribe,
    metamaskConfig.value,
    metamaskConfig.value,
  );
};
