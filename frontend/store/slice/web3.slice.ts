import { sepolia, mainnet } from "viem/chains";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StreamProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: StreamProvider;
  }
}

export const ethereum =
  typeof window !== "undefined" ? window.ethereum : undefined;
export const supportedChains = [sepolia, mainnet];

type StatusType = "disconnected" | "connecting" | "connected" | "error";

interface InitialWeb3StateProps {
  accounts: string[];
  connectedAccount: string | null;
  status: StatusType;
  isMetaMaskInstalled: boolean;
  chainId: string | null;
  isSupportedChain: boolean;
  detectedProviders: EIP6963ProviderDetail[];
  error: string | null;
}

const initialWeb3State: InitialWeb3StateProps = {
  accounts: [],
  connectedAccount: null,
  status: "disconnected",
  isMetaMaskInstalled: false,
  chainId: null,
  isSupportedChain: false,
  detectedProviders: [],
  error: null,
};

const web3Slice = createSlice({
  name: "web3",
  initialState: initialWeb3State,
  reducers: {
    setAccounts(state, action: PayloadAction<string[]>) {
      state.accounts = action.payload;
      state.connectedAccount = action.payload[0] || null;
      state.status = action.payload.length ? "connected" : "disconnected";
    },
    setConnectedAccount(state, action: PayloadAction<string | null>) {
      state.connectedAccount = action.payload;
      state.status = action.payload ? "connected" : "disconnected";
    },
    setIsMetaMaskInstalled(state, action: PayloadAction<boolean>) {
      state.isMetaMaskInstalled = action.payload;
    },
    setChainId(state, action: PayloadAction<string | null>) {
      state.chainId = action.payload;
    },
    setIsSupportedChain(state, action: PayloadAction<boolean>) {
      state.isSupportedChain = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
    setDetectedProviders: (
      state,
      action: PayloadAction<EIP6963ProviderDetail[]>,
    ) => {
      state.detectedProviders = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      if (action.payload) state.status = "error";
    },
    resetConnectionState(state) {
      state.accounts = [];
      state.connectedAccount = null;
      state.status = "disconnected";
      state.chainId = null;
      state.isSupportedChain = false;
      state.error = null;
    },
  },
});

export const {
  setAccounts,
  setConnectedAccount,
  setDetectedProviders,
  setStatus,
  setChainId,
  setError,
  setIsMetaMaskInstalled,
  resetConnectionState,
} = web3Slice.actions;

export default web3Slice.reducer;
