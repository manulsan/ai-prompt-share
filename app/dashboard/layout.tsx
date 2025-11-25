import React from "react";
import type { Metadata } from "next";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Manage your AI prompts, view statistics, and track your community engagement",

  alternates: {
    canonical: `${baseUrl}/dashboard`,
  },

  openGraph: {
    title: "Dashboard | Share AI Prompts",
    description: "Manage your AI prompts and view analytics",
    url: `${baseUrl}/dashboard`,
    siteName: "Share AI Prompts",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Dashboard | Share AI Prompts",
    description: "Manage your AI prompts and view analytics",
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
