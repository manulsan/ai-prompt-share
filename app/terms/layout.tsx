import type { Metadata } from "next";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read our terms of service and understand the rules, guidelines, and policies for using Share AI Prompts platform.",

  alternates: {
    canonical: `${baseUrl}/terms`,
  },

  openGraph: {
    title: "Terms of Service | Share AI Prompts",
    description:
      "Read our terms of service and understand the rules for using our platform",
    url: `${baseUrl}/terms`,
    siteName: "Share AI Prompts",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Terms of Service | Share AI Prompts",
    description:
      "Read our terms of service and understand the rules for using our platform",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
