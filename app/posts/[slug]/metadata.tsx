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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    // Await params in Next.js 15+
    const { slug } = await params;

    const baseUrl =
      process.env.NEXTAUTH_URL || "https://ai-prompt-share-pied.vercel.app";
    const response = await fetch(`${baseUrl}/api/posts/slug/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        title: "Post Not Found",
        description: "The requested post could not be found.",
      };
    }

    const post: Post = await response.json();

    // Validate post data
    if (!post || !post.title) {
      return {
        title: "Post Not Found",
        description: "The requested post could not be found.",
      };
    }

    // Strip markdown and create description (with fallback)
    const description = post.content
      ? post.content
          .replace(/#{1,6}\s+/g, "")
          .replace(/\*\*(.+?)\*\*/g, "$1")
          .replace(/\*(.+?)\*/g, "$1")
          .replace(/`{1,3}[^`]*`{1,3}/g, "")
          .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
          .replace(/\n/g, " ")
          .trim()
          .substring(0, 160)
      : "Read this AI prompt on Share AI Prompts";

    const ogImage = `${baseUrl}/og-image.jpg`;

    return {
      title: post.title,
      description: description,
      keywords: [...(post.tags || []), "AI prompts", "ChatGPT", "AI writing"],
      authors: [{ name: post.author?.name || "Anonymous" }],
      openGraph: {
        title: post.title,
        description: description,
        url: `${baseUrl}/posts/${post.slug}`,
        siteName: "Share AI Prompts",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
        locale: "en_US",
        type: "article",
        publishedTime: post.createdAt,
        authors: [post.author?.name || "Anonymous"],
        tags: post.tags || [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: description,
        images: [ogImage],
        creator: "@shareAIprompts",
      },
      alternates: {
        canonical: `${baseUrl}/posts/${post.slug}`,
      },
      robots: {
        index: post.published ?? true,
        follow: post.published ?? true,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Share AI Prompts",
      description: "Discover creative AI prompts from our community",
    };
  }
}
