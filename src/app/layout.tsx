import { ThemeProvider } from "patryk/components/theme-provider";
import "./globals.css";
import { Toaster } from "patryk/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="w-full h-full" lang="en" suppressHydrationWarning>
      <link rel="icon" href="/beza.png" sizes="any" />
      <body className="w-full h-full">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
