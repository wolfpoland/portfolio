import { ThemeProvider } from "patryk/components/theme-provider";
import "./globals.css";
import { Toaster } from "patryk/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { CommandActions } from "patryk/components/command-actions";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="w-full h-full" lang="en" suppressHydrationWarning>
      <link rel="icon" href="/beza.png" sizes="any" />
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CommandActions>{children}</CommandActions>
          <Analytics />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
