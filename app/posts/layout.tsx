import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Posts - Share AI Prompts",
  description:
    "View and manage your AI prompt posts. Create, edit, and share your creative AI prompts with the community.",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
