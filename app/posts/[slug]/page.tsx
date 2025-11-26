"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Copy, Home, FileText } from "lucide-react";
import PostStatusBadge from "@/app/components/PostStatusBadge";
import HashTags from "@/app/components/HashTags";
import ButtonHome from "@/app/components/ButtonHome";
import Comments from "@/app/components/Comments";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useResponsiveContainer } from "@/app/hooks/useResponsiveContainer";

interface Post {
  _id: string;
  title: string;
  content: string;
  slug: string;
  author: {
    name: string;
    email: string;
    image?: string;
  };
  published: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { getContainerClass } = useResponsiveContainer();

  useEffect(() => {
    fetchPost();
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/slug/${params.slug}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch post");
      }

      setPost(data.post);
    } catch (error: any) {
      console.error("Error fetching post:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyContent = async () => {
    if (post?.content) {
      try {
        await navigator.clipboard.writeText(post.content);
        alert("Content copied");
      } catch (error) {
        console.error("Failed to copy content:", error);
        alert("Failed to copy content");
      }
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-center text-red-500">{error || "Post not found"}</p>
        <div className="text-center mt-4">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            aria-label="Go back to home page"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className={getContainerClass()}>
      {/* Post Header */}
      <header className="mb-4">
        {/* Title */}
        <h2 className="h1_title">
          <FileText className="w-9 h-9" />
          {post.title}
        </h2>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-">
          <div className="flex flex-wrap items-center gap-2">
            {/* Author */}
            <div className="flex items-center gap-2">
              {post.author.image ? (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full  flex items-center justify-center text-sm font-semibold">
                  {post.author.name.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="font-medium">{post.author.name}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              {/* <Calendar className="w-4 h-4" /> */}
              {/* <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span> */}
            </div>
            <PostStatusBadge published={post.published} />
          </div>

          {/* Status Badge */}

          <div className="flex items-center">
            <button
              onClick={handleCopyContent}
              className="btn_v1"
              aria-label="Copy post content to clipboard"
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none">
        <div
          className=" rounded-lg shadow-sm border border-gray-400 px-6 markdown-content"
          style={{ minHeight: "250px" }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-2xl font-bold mt-5 mb-3" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="mb-4 leading-7" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside mb-4 ml-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside mb-4 ml-4" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700"
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }: any) =>
                inline ? (
                  <code
                    className="bg-gray-100 px-2 py-1 rounded text-sm text-red-600"
                    {...props}
                  />
                ) : (
                  <code
                    className="block bg-gray-900 text-white p-4 rounded-lg my-4 overflow-x-auto"
                    {...props}
                  />
                ),
              a: ({ node, ...props }) => (
                <a
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              img: ({ node, ...props }) => (
                <img className="rounded-lg my-4 max-w-full" {...props} />
              ),
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-4">
                  <table
                    className="min-w-full divide-y divide-gray-200 border"
                    {...props}
                  />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th
                  className="px-4 py-2 bg-gray-100 font-semibold text-left"
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td className="px-4 py-2 border-t" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        {/* Tags */}
        <HashTags tags={post.tags} />
      </div>

      {/* Footer */}
      <footer className="mt-5 pt-4 border-t border-gray-400">
        <div className="flex items-center justify-between">
          <div className="text_label_comment2">
            Last updated: {new Date(post.updatedAt).toLocaleDateString()}
          </div>
          <ButtonHome />
        </div>
      </footer>

      {/* Comments Section */}
      <Comments postId={post._id} postAuthorEmail={post.author.email} />
    </article>
  );
}
