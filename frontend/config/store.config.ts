import { configureStore } from "@reduxjs/toolkit";

import web3Reducer from "@/store/slice/web3.slice";
import setupReducer from "@/store/slice/setup.slice";

export const storeConfig = configureStore({
  reducer: {
    web3: web3Reducer,
    setup: setupReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof storeConfig.getState>;
export type AppDispatch = typeof storeConfig.dispatch;
