import { AppDispatch, RootState } from "@/config/store.config";
import { useDispatch, useSelector } from "react-redux";

export const useWallet = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wallet = useSelector((state: RootState) => state.web3);
  return { ...wallet, dispatch };
};
