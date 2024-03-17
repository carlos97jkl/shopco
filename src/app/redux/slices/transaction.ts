"use client";

// @packages
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// @scripts
import {
  getItemLocalStorage,
  storeOnLocalStorage,
} from "@/app/utils/commonFunctions";

// @constants
const localStorageKey = "transaction-data";
const initialState = {
  cardNumber: null,
  cardholderID: null,
  cardholderName: null,
  expiryDate: null,
  nameProduct: "",
  numberOfPayments: 1,
  price: 0,
  quantity: 0,
  securityCode: null,
  total: 0,
};
export type TTransaction = keyof typeof initialState;

const transaction = createSlice({
  name: "data-transaction",
  initialState: getItemLocalStorage(localStorageKey) || initialState,
  reducers: {
    savePaymentData: (
      state,
      action: PayloadAction<{
        prop: TTransaction;
        data: string | number | boolean;
      }>,
    ) => {
      state[action.payload.prop] = action.payload.data;
      storeOnLocalStorage(localStorageKey, state);
    },
    deletePaymentData: () => {
      storeOnLocalStorage(localStorageKey, initialState);
      return initialState;
    },
  },
});

export const { savePaymentData, deletePaymentData } = transaction.actions;
export default transaction.reducer;
