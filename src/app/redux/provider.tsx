"use client";

// @packages
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";

// @scripts
import { store } from "./store";

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
