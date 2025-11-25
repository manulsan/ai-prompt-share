import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Share AI Prompts",
  description:
    "Manage your AI prompts and view your profile. Track your posts and engagement with the community.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
