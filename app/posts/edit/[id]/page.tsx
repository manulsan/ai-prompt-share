"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Save, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useResponsiveContainer } from "@/app/hooks/useResponsiveContainer";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();
  const { getContainerClass } = useResponsiveContainer();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");
  const [contentType, setContentType] = useState<"markdown" | "json">(
    "markdown"
  );
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "",
    tags: "",
    published: false,
  });
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);
  const [originalSlug, setOriginalSlug] = useState("");

  // Function to generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
  };

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
      const postSlug = post.slug;
      console.log("=== Edit Page Debug ===");
      console.log("Raw content from DB:", post.content);
      console.log("Content type:", typeof post.content);
      console.log("Content length:", post.content?.length);
      console.log("First 100 chars:", post.content?.substring(0, 100));
      setOriginalSlug(postSlug);
      setContentType(post.contentType || "markdown");
      setFormData({
        title: post.title,
        content: post.content,
        slug: postSlug,
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

    // Auto-generate slug from title if slug hasn't been manually edited
    if (name === "title" && !isSlugManuallyEdited) {
      setFormData((prev) => ({
        ...prev,
        title: value,
        slug: generateSlug(value),
      }));
    } else if (name === "slug") {
      // Mark slug as manually edited when user changes it from original
      if (value !== originalSlug) {
        setIsSlugManuallyEdited(true);
      }
      setFormData((prev) => ({
        ...prev,
        slug: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      }));
    }
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
        body: JSON.stringify({
          ...formData,
          contentType,
        }),
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
      <div className={getContainerClass()}>
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
            Slug *{" "}
            {!isSlugManuallyEdited && (
              <span className="text-gray-500 text-xs">(auto-generated)</span>
            )}
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
            URL-friendly version. Auto-generated from title, but you can edit
            it.
          </p>
        </div>

        {/* Content Type */}
        <div>
          <label className="text_label block mb-2">Content Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="markdown"
                checked={contentType === "markdown"}
                onChange={(e) =>
                  setContentType(e.target.value as "markdown" | "json")
                }
                className="mr-2"
              />
              Markdown
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="json"
                checked={contentType === "json"}
                onChange={(e) =>
                  setContentType(e.target.value as "markdown" | "json")
                }
                className="mr-2"
              />
              JSON
            </label>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="content" className="text_label block text-sm  mb-2">
              Content *{" "}
              <span className="text_label block text-sm  mb-2">
                (
                {contentType === "markdown"
                  ? "Markdown supported"
                  : "JSON format"}
                )
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
            contentType === "markdown" ? (
              <div className="w-full min-h-[300px] px-4 py-2 border border-gray-300 rounded-lg prose prose-sm max-w-none">
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
                    p: ({ node, ...props }) => (
                      <p className="mb-3" {...props} />
                    ),
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
              <pre className="w-full min-h-[300px] px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 whitespace-pre-wrap">
                {formData.content
                  ? (() => {
                      try {
                        return JSON.stringify(
                          JSON.parse(formData.content),
                          null,
                          2
                        );
                      } catch (e) {
                        return "Invalid JSON format";
                      }
                    })()
                  : "No JSON content yet..."}
              </pre>
            )
          ) : (
            <textarea
              id="content"
              name="content"
              required
              value={formData.content}
              onChange={handleChange}
              rows={12}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-y font-mono text-sm"
              placeholder={
                contentType === "markdown"
                  ? "Write your post content here using Markdown..."
                  : `{\n  "title": "Your JSON Data",\n  "description": "Enter valid JSON here"\n}`
              }
            />
          )}
          <p className="text_label_comment mt-1">
            {contentType === "markdown"
              ? "Supports Markdown: **bold**, *italic*, `code`, lists, links, images, etc."
              : "Enter valid JSON format. Preview will format it automatically."}
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
          <label htmlFor="published" className="ml-2 text_label_comment2">
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
