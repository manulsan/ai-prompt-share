import type { Metadata } from "next";

const baseUrl =
  process.env.NEXTAUTH_URL || "https://ai-prompt-share-pied.vercel.app";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions for using Share AI Prompts. Learn about user responsibilities, content guidelines, and service policies.",
  keywords: [
    "terms of service",
    "user agreement",
    "terms and conditions",
    "platform rules",
    "service policies",
  ],
  openGraph: {
    title: "Terms of Service | Share AI Prompts",
    description: "Understand the rules and guidelines for using our platform",
    url: `${baseUrl}/terms`,
    siteName: "Share AI Prompts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Share AI Prompts",
    description: "Understand the rules and guidelines for using our platform",
  },
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
