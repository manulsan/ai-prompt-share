import React from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "YouTube Video Search",
  description:
    "Search and discover YouTube videos related to AI prompts, creative writing, and AI tools. Filter by duration, date, and relevance.",
  keywords: [
    "YouTube search",
    "AI videos",
    "AI prompts videos",
    "ChatGPT tutorials",
    "AI learning",
  ],

  alternates: {
    canonical: `${baseUrl}/youtube-search`,
  },

  openGraph: {
    title: "YouTube Video Search | Share AI Prompts",
    description:
      "Search and discover YouTube videos related to AI prompts and creative writing",
    url: `${baseUrl}/youtube-search`,
    siteName: "Share AI Prompts",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "YouTube Video Search",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Video Search | Share AI Prompts",
    description: "Search and discover YouTube videos related to AI prompts",
    images: [`${baseUrl}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function YoutubeSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
