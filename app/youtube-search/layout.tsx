import React from "react";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXTAUTH_URL || "https://ai-prompt-share-pied.vercel.app";

export const metadata: Metadata = {
  title: "YouTube Search",
  description:
    "Search and discover YouTube videos related to AI prompts. Filter by duration, date, and find relevant video content.",
  keywords: [
    "YouTube",
    "AI videos",
    "AI tutorials",
    "AI prompts videos",
    "ChatGPT videos",
  ],
  openGraph: {
    title: "YouTube Search | Share AI Prompts",
    description:
      "Search and discover YouTube videos about AI prompts and tutorials",
    url: `${baseUrl}/youtube-search`,
    siteName: "Share AI Prompts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Search | Share AI Prompts",
    description: "Search and discover YouTube videos about AI prompts",
  },
  alternates: {
    canonical: `${baseUrl}/youtube-search`,
  },
};

export default function YoutubeSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
