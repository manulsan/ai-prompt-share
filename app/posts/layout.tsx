import React from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "All Posts",
  description:
    "Browse all AI prompts and creative ideas shared by our community. Discover the latest posts, stories, and insights from AI writers.",
  keywords: [
    "AI prompts",
    "posts",
    "community",
    "AI writing",
    "creative ideas",
  ],

  alternates: {
    canonical: `${baseUrl}/posts`,
  },

  openGraph: {
    title: "All Posts | Share AI Prompts",
    description:
      "Browse all AI prompts and creative ideas shared by our community",
    url: `${baseUrl}/posts`,
    siteName: "Share AI Prompts",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Share AI Prompts - All Posts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "All Posts | Share AI Prompts",
    description:
      "Browse all AI prompts and creative ideas shared by our community",
    images: [`${baseUrl}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
