import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ethereum,
  resetConnectionState,
  setAccounts,
  setChainId,
  setError,
  setStatus,
} from "../slice/web3.slice";
import { toast } from "sonner";

export const connectWallet = createAsyncThunk(
  "wallet/connectWallet",
  async (provider: EIP6963ProviderDetail, { rejectWithValue, dispatch }) => {
    if (!ethereum) return rejectWithValue("Ethereum object not found");

    try {
      dispatch(setStatus("connecting"));

      const accounts = (await provider.provider.request({
        method: "eth_requestAccounts",
      })) as string[];

      const chainId = (await provider.provider.request({
        method: "eth_chainId",
      })) as string;

      dispatch(setAccounts(accounts));
      dispatch(setChainId(chainId));
      dispatch(setStatus("connected"));

      return rejectWithValue("No accounts found");
    } catch (err) {
      const e = err as MMError;
      const errMsg = `${e.message} (code: ${e.code})`;
      toast.error(errMsg);
      dispatch(setError(errMsg));
      return rejectWithValue(e.message);
    }
  },
);

export const disconnectWallet = createAsyncThunk(
  "wallet/disconnectWallet",
  async (_, { rejectWithValue, dispatch }) => {
    if (!ethereum) return rejectWithValue("Ethereum object not found");

    try {
      await ethereum.request({
        method: "wallet_revokePermissions",
        params: [{ eth_accounts: {} }],
      });

      dispatch(resetConnectionState());
      dispatch(setStatus("disconnected"));
      window.dispatchEvent(new Event("eip6963:requestProvider"));

      return rejectWithValue("Wallet disconnected");
    } catch (err) {
      const e = err as MMError;
      const errMsg = `${e.message} (code: ${e.code})`;
      toast.error(e.message);
      dispatch(setError(errMsg));
      return rejectWithValue(e.message);
    }
  },
);
