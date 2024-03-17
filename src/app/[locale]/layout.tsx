// @packages
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "@mui/material/styles";

// @scripts
import Provider from "@/app/redux/provider";
import SnackBar from "@/app/ui/common/snackbar";

// @styles
import "./globals.css";
import { theme } from "@/app/utils/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
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
      </NextIntlClientProvider>
    </html>
  );
}
