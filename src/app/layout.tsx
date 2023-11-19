import { Analytics } from "@vercel/analytics/react";
import Provider from "patryk/app/providers";
import { CommandActions } from "patryk/components/command-actions";
import { ThemeProvider } from "patryk/components/theme-provider";
import { Toaster } from "patryk/components/ui/toaster";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full w-full" lang="en" suppressHydrationWarning>
      <link rel="icon" href="/beza.png" sizes="any" />
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Provider>
            <CommandActions>{children}</CommandActions>
          </Provider>
          <Analytics />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
