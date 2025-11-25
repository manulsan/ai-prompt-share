import React from "react";
import type { Metadata } from "next";

const baseUrl =
  process.env.NEXTAUTH_URL || "https://ai-prompt-share-pied.vercel.app";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Manage your AI prompts and view your profile. Track your posts and engagement with the community.",
  keywords: ["dashboard", "AI prompts", "statistics", "manage posts"],
  openGraph: {
    title: "Dashboard | Share AI Prompts",
    description: "Manage your AI prompt posts and view statistics",
    url: `${baseUrl}/dashboard`,
    siteName: "Share AI Prompts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Dashboard | Share AI Prompts",
    description: "Manage your AI prompt posts and view statistics",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
