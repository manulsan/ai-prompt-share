import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Video Search - Share AI Prompts",
  description:
    "Search and discover YouTube videos related to AI prompts. Filter by duration, date, and find relevant video content.",
};

export default function YoutubeSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
