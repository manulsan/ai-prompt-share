import type { Metadata } from "next";

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Share AI Prompts collects, uses, and protects your personal information. Read our comprehensive privacy policy.",

  alternates: {
    canonical: `${baseUrl}/privacy`,
  },

  openGraph: {
    title: "Privacy Policy | Share AI Prompts",
    description:
      "Learn how we collect, use, and protect your personal information",
    url: `${baseUrl}/privacy`,
    siteName: "Share AI Prompts",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Privacy Policy | Share AI Prompts",
    description:
      "Learn how we collect, use, and protect your personal information",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
