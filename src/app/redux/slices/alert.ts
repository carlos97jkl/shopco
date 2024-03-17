"use client";

// @packages
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, message: "" };

const alert = createSlice({
  name: "global-alert",
  initialState: initialState,
  reducers: {
    openSnackbar: (state, action: PayloadAction<string>) => {
      state.show = true;
      state.message = action.payload;
    },
    closeSnackbar: () => {
      return initialState;
    },
  },
});

export const { openSnackbar, closeSnackbar } = alert.actions;
export default alert.reducer;
