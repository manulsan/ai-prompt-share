import React from "react";
import type { Metadata } from "next";

interface Post {
  _id: string;
  title: string;
  content: string;
  slug: string;
  author: {
    name: string;
    email: string;
  };
  published: boolean;
  tags: string[];
  createdAt: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/posts/slug/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error("Error fetching post for metadata:", error);
    return null;
  }
}

function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/#{1,6}\s+/g, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/`{1,3}[^`]*`{1,3}/g, "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/^>\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/~~~[^~]*~~~/g, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\n/g, " ")
    .trim();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  const description = stripMarkdown(post.content).substring(0, 160);
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const postUrl = `${baseUrl}/posts/${post.slug}`;

  return {
    title: post.title,
    description: description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],

    // Canonical URL
    alternates: {
      canonical: postUrl,
    },

    // OpenGraph for Facebook, LinkedIn, Discord, WhatsApp, Telegram, Slack
    openGraph: {
      title: post.title,
      description: description,
      url: postUrl,
      siteName: "Share AI Prompts",
      locale: "en_US",
      type: "article",
      publishedTime: post.createdAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`, // Add your OG image
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    // Twitter/X
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      creator: "@shareAIprompts", // Update with your Twitter handle
      images: [`${baseUrl}/og-image.jpg`],
    },

    // Robots (SEO - only index published posts)
    robots: {
      index: post.published,
      follow: post.published,
      googleBot: {
        index: post.published,
        follow: post.published,
      },
    },
  };
}

export default function PostSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
