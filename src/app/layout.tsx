import {ThemeProvider} from "patryk/components/theme-provider";
import "./globals.css";

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (

        <html className="w-full h-full" lang="en" suppressHydrationWarning>
        <head/>
        <body className="w-full h-full">
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
        </body>
        </html>

    )
}
