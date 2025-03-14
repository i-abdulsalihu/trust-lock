import { metamaskConfig } from "@/config/metamask.config";
import { useSyncExternalStore } from "react";

export const useSyncProviders = () => {
  return useSyncExternalStore(metamaskConfig.subscribe, metamaskConfig.value);
};
