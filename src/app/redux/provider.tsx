"use client";

// @Packages
import { Provider } from "react-redux";

// @Scripts
import { store } from "./store";

const ReduxProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
