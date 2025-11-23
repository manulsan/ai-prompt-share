// https://nextjs.org/docs/app/getting-started/layouts-and-pages
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Nav from "./components/Nav";
import Provider from "./components/Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Share AI Prompts",
  description: "Discover, post, and explore creative AI-generated prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <p> Hello World</p>
        </div> */}
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
