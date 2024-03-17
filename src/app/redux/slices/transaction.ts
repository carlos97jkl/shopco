"use client";
// @packages
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// @constants
const localStorageKey = "transaction-data";

const initialState: { [key: string]: boolean | string | number | null } = {
  quantity: 0,
  cardNumber: null,
  expiryDate: null,
  securityCode: null,
  cardholderName: null,
  cardholderID: null,
  numberOfPayments: 1,
  isCheckedData: false,
  isDialogOpen: false,
  price: 0,
  total: 0,
  nameProduct: "",
};

const getTransactionData = () => {
  const transactionData = localStorage.getItem(localStorageKey);
  return transactionData ? JSON.parse(transactionData) : initialState;
};

const storeTransactionData = (dataSave: any) => {
  localStorage.setItem(localStorageKey, JSON.stringify(dataSave));
};

const transaction = createSlice({
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
    deletePaymentData: () => {
      storeTransactionData(initialState);
      return initialState;
    },
  },
});

export const { savePaymentData, deletePaymentData } = transaction.actions;
export default transaction.reducer;
