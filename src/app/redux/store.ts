// @packages
import slices from "./slices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    dataTransaction: slices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
