// @packages
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";

// @styles
import "./globals.css";
import { theme } from "./lib/utils/theme";
import Provider from "./redux/provider";
import SnackBar from "./ui/common/snackbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <SnackBar />
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Grid
                container
                justifyContent="center"
                mt="10px"
                style={{
                  maxWidth: "1200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "10px",
                }}
              >
                <Grid item xs={12}>
                  <Typography color="#99D1FC" variant="h4">
                    shop.co
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  {children}
                </Grid>
              </Grid>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
