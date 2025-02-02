import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import repleek from "repleek.json";
import { useMemo } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = useMemo(
    () =>
      Object.entries(repleek.fonts).map(([name, link]) => (
        <link href={link} rel="stylesheet" key={name} />
      )),
    []
  );

  return (
    <html lang="en">
      <head>{fonts}</head>
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
