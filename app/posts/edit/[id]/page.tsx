"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Save, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "",
    tags: "",
    published: false,
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
      return;
    }

    if (status === "authenticated") {
      fetchPost();
    }
  }, [status]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${params.id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch post");
      }

      const post = data.post;
      setFormData({
        title: post.title,
        content: post.content,
        slug: post.slug,
        tags: post.tags.join(", "),
        published: post.published,
      });
    } catch (error: any) {
      console.error("Error fetching post:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/posts/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update post");
      }

      alert("Post updated successfully!");
      router.push("/posts");
    } catch (error: any) {
      console.error("Error updating post:", error);
      alert(error.message || "Failed to update post");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page_div">
        <p className="text-center text-red-500">Error: {error}</p>
        <div className="text-center mt-4">
          <button
            onClick={() => router.push("/posts")}
            className="px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back to Posts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  mb-8">Edit Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            // className="block text-sm font-medium text-gray-700 mb-2"
            className="text_label block mb-2"
          >
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="input_box"
            placeholder="Enter post title"
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="text_label block mb-2">
            Slug *
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            required
            value={formData.slug}
            onChange={handleChange}
            className="input_box"
            placeholder="post-url-slug"
          />
          <p className="text_label_comment mt-1">
            URL-friendly version (e.g., my-first-post)
          </p>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="content" className="text_label block text-sm  mb-2">
              Content *{" "}
              <span className="text_label block text-sm  mb-2">
                (Markdown supported)
              </span>
            </label>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              {showPreview ? "Edit" : "Preview"}
            </button>
          </div>

          {showPreview ? (
            <div className="w-full min-h-[300px] px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 prose prose-sm max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-xl font-bold mt-3 mb-2" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-lg font-bold mt-2 mb-1" {...props} />
                  ),
                  p: ({ node, ...props }) => <p className="mb-3" {...props} />,
                  code: ({ node, inline, ...props }: any) =>
                    inline ? (
                      <code
                        className="bg-gray-200 px-1 py-0.5 rounded text-sm text-red-600"
                        {...props}
                      />
                    ) : (
                      <code
                        className="block bg-gray-900 text-white p-3 rounded my-2 overflow-x-auto text-sm"
                        {...props}
                      />
                    ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc list-inside mb-3 ml-2"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal list-inside mb-3 ml-2"
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-blue-500 pl-3 italic my-3 text-gray-700"
                      {...props}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-blue-600 hover:underline" {...props} />
                  ),
                }}
              >
                {formData.content || "*No content yet...*"}
              </ReactMarkdown>
            </div>
          ) : (
            <textarea
              id="content"
              name="content"
              required
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-y font-mono text-sm"
              placeholder="Write your post content here using Markdown..."
            />
          )}
          <p className="text_label_comment mt-1">
            Supports Markdown: **bold**, *italic*, `code`, lists, links, images,
            etc.
          </p>
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text_label mb-2">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="input_box"
            placeholder="javascript, nextjs, tutorial (comma-separated)"
          />
          <p className="text_label_comment mt-1">Separate tags with commas</p>
        </div>

        {/* Published */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="published"
            name="published"
            checked={formData.published}
            onChange={handleChange}
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
          />
          <label
            htmlFor="published"
            className="ml-2 text-sm font-medium text-gray-700"
          >
            Published
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 btn_v1 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            {isSubmitting ? "Updating..." : "Update Post"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/posts")}
            className="px-6 py-2 btn_v1"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
