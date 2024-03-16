"use client";
// @packages
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// @constants
const localStorageKey = "transaction-data";

const initialState: { [key: string]: boolean | string | number } = {
  quantity: 0,
  cardNumber: "",
  expiryDate: "",
  securityCode: "",
  cardholderName: "",
  cardholderID: "",
  numberOfPayments: 1,
  isCheckedData: false,
  isDialogOpen: false,
};

const getTransactionData = () => {
  const transactionData = localStorage.getItem(localStorageKey);
  return transactionData ? JSON.parse(transactionData) : initialState;
};

const storeTransactionData = (dataSave: any) => {
  localStorage.setItem(localStorageKey, JSON.stringify(dataSave));
};

const slices = createSlice({
  name: "counter",
  initialState: getTransactionData(),
  reducers: {
    savePaymentData: (
      state,
      action: PayloadAction<{ prop: string; data: string | number | boolean }>,
    ) => {
      state[action.payload.prop] = action.payload.data;
      storeTransactionData(state);
    },
    deletePaymentData: (state) => {
      state = initialState;
      storeTransactionData(initialState);
    },
  },
});

export const { savePaymentData, deletePaymentData } = slices.actions;
export default slices.reducer;
