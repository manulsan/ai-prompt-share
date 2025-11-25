import type { Metadata } from "next";

const baseUrl =
  process.env.NEXTAUTH_URL || "https://ai-prompt-share-pied.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Share AI Prompts collects, uses, and protects your personal information. Our privacy policy explains data handling for OAuth authentication and user content.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "GDPR",
    "OAuth security",
  ],
  openGraph: {
    title: "Privacy Policy | Share AI Prompts",
    description: "Learn how we protect your personal information and data",
    url: `${baseUrl}/privacy`,
    siteName: "Share AI Prompts",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Share AI Prompts",
    description: "Learn how we protect your personal information and data",
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
