import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users - Share AI Prompts",
  description:
    "Browse all users in the AI Prompts community. Discover prompt creators and their contributions.",
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
