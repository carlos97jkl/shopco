import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { RootState } from "@/app/redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { NextIntlClientProvider } from "next-intl";
import messages from "../../../messages/en.json";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/slices";

export const setupStore = (preloadState: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: preloadState,
  });

export function renderWithProviders(
  ui: React.ReactElement,
  preloadedState: Partial<RootState> = {},
) {
  const store = setupStore(preloadedState);
  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <NextIntlClientProvider messages={messages} locale="en">
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </ThemeProvider>
        </Provider>
      </NextIntlClientProvider>
    );
  };

  return {
    store,
    ...render(ui, { wrapper: Wrapper }),
  };
}
