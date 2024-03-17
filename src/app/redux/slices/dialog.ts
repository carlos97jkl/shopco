"use client";

// @packages
import { createSlice } from "@reduxjs/toolkit";

// @scripts
import {
  getItemLocalStorage,
  storeOnLocalStorage,
} from "@/app/utils/commonFunctions";

// @constants
const localStorageKey = "global-dialog";
const initialState = false;

const alert = createSlice({
  name: "global-dialog",
  initialState: getItemLocalStorage(localStorageKey) || initialState,
  reducers: {
    openDialog: () => {
      storeOnLocalStorage(localStorageKey, true);
      return true;
    },
    closeDialog: () => {
      storeOnLocalStorage(localStorageKey, false);
      return false;
    },
  },
});

export const { openDialog, closeDialog } = alert.actions;
export default alert.reducer;
