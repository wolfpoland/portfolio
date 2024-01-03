import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import Provider from "patryk/app/providers";
import { CommandActions } from "patryk/components/command-actions";
import { ThemeProvider } from "patryk/components/theme-provider";
import { Toaster } from "patryk/components/ui/toaster";
import { cn } from "patryk/utils/utility/utils";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cn("dark h-full w-full antialiased", GeistSans.className)}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <link rel="icon" href="/beza.png" sizes="any" />
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
