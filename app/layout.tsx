// https://nextjs.org/docs/app/getting-started/layouts-and-pages
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
  title: {
    default: "Share AI Prompts - Discover Creative AI Writing Ideas",
    template: "%s | Share AI Prompts",
  },
  description:
    "Discover, post, and explore creative AI-generated prompts. Share ideas, stories, insights and experiences from our community of AI writers. Browse curated AI prompts for ChatGPT, GPT-4, and more.",
  keywords: [
    "AI prompts",
    "ChatGPT prompts",
    "GPT-4",
    "AI writing",
    "creative prompts",
    "AI ideas",
    "prompt sharing",
    "AI community",
  ],
  authors: [{ name: "Share AI Prompts" }],
  openGraph: {
    title: "Share AI Prompts - Discover Creative AI Writing Ideas",
    description:
      "Discover and share creative AI prompts from our community. Browse the latest AI writing prompts, ideas, and experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Share AI Prompts",
    description: "Discover and share creative AI prompts from our community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <p> Hello World</p>
        </div> */}
        <Provider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
