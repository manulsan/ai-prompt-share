import React from "react";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXTAUTH_URL || "https://ai-prompt-share-pied.vercel.app";

export const metadata: Metadata = {
  title: "My Posts",
  description:
    "View and manage your AI prompt posts. Create, edit, and share your creative AI prompts with the community.",
  keywords: ["AI prompts", "my posts", "manage prompts", "AI writing"],
  openGraph: {
    title: "My Posts | Share AI Prompts",
    description: "View and manage your AI prompt posts",
    url: `${baseUrl}/posts`,
    siteName: "Share AI Prompts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Posts | Share AI Prompts",
    description: "View and manage your AI prompt posts",
  },
  alternates: {
    canonical: `${baseUrl}/posts`,
  },
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
