// @packages
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// @styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
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
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
