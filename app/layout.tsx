import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { unstable_ViewTransition as ViewTransition } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/Navbar";
import { NavigationMenu } from "@/components/navbar/exp-NavBar";
import Blur from "@/components/blur";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabir KOUTABI's portfolio",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ViewTransition>
            <div className="container mx-auto max-w-xl px-2 sm:px-0">
              <NavBar />
              <Blur />
              {children}
            </div>
            <NavigationMenu />

          </ViewTransition>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-ML5VWT2NS3" />
    </html>
  );
}
