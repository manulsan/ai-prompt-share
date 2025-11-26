"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Check, X, Eye, Edit3 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useResponsiveContainer } from "@/app/hooks/useResponsiveContainer";

// localhost:3000/posts/new
export default function NewPostPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { getContainerClass } = useResponsiveContainer();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
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

  // Redirect if not authenticated
  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }

  if (status === "loading") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

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
      // Mark slug as manually edited when user changes it
      setIsSlugManuallyEdited(true);
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

  const handleTagCheckbox = (tag: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTags = prev.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      if (checked) {
        // Add tag if not already present
        if (!currentTags.includes(tag)) {
          currentTags.push(tag);
        }
      } else {
        // Remove tag
        const index = currentTags.indexOf(tag);
        if (index > -1) {
          currentTags.splice(index, 1);
        }
      }

      return {
        ...prev,
        tags: currentTags.join(", "),
      };
    });
  };

  const isTagChecked = (tag: string) => {
    const currentTags = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    return currentTags.includes(tag);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
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
        throw new Error(data.error || "Failed to create post");
      }

      alert("Post created successfully!");
      router.push("/posts");
    } catch (error: any) {
      console.error("Error creating post:", error);
      alert(error.message || "Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={getContainerClass()}>
      <h1 className="post_title">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text_label mb-2">
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            // className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            className="input_box"
            placeholder="Enter post title"
          />
        </div>
        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text_label mb-2">
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
        {/* Content */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <label htmlFor="content" className="block text_label">
                Content *
              </label>
              {/* Content Type Selection */}
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="contentType"
                    value="markdown"
                    checked={contentType === "markdown"}
                    onChange={(e) => setContentType("markdown")}
                    className="w-3 h-3"
                  />
                  <span className="text-sm">Markdown</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="contentType"
                    value="json"
                    checked={contentType === "json"}
                    onChange={(e) => setContentType("json")}
                    className="w-3 h-3"
                  />
                  <span className="text-sm">JSON</span>
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="btn_v1"
            >
              {showPreview ? (
                <>
                  <Edit3 className="w-4 h-4" />
                  Edit
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Preview
                </>
              )}
            </button>
          </div>

          {showPreview ? (
            <div className="w-full min-h-[300px] px-4 input_box">
              {contentType === "markdown" ? (
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
                  {formData.content ||
                    "*No content yet. Start writing to see preview...*"}
                </ReactMarkdown>
              ) : (
                <pre className="text-sm text-gray-300 whitespace-pre-wrap wrap-break-word">
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
              )}
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
              placeholder={
                contentType === "markdown"
                  ? `# Your Post Title

Write your post content here using Markdown...

## Examples:
**Bold text**, *italic text*, \`code\`, [links](https://example.com)

- Bullet points
- Another point

\`\`\`
Code blocks
\`\`\``
                  : `{
  "title": "Your JSON Data",
  "description": "Enter valid JSON here",
  "items": [
    "item1",
    "item2"
  ]
}`
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

          {/* Quick Tag Checkboxes */}
          <div className="flex flex-wrap gap-4 mb-3">
            {[
              "Nextjs",
              "Nodejs",
              "Typescript",
              "Javascript",
              "React",
              "Tailwindcss",
              "Mongodb",
              "Express",
              "Zod",
              "Yup",
              "Prisma",
              "Marketplace",
              "SEO",
              "OAuth",
              "Error Handling",
              "NextAuth",
              "Unit Testing",
              "Jest",
              "AI",
              "State",
              "JSON",
              "Business",
              "Strategy",
              "Marketing",
            ].map((tag) => (
              <label
                key={tag}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isTagChecked(tag)}
                  onChange={(e) => handleTagCheckbox(tag, e.target.checked)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-sm">{tag}</span>
              </label>
            ))}
          </div>

          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-1 input_box"
            placeholder="javascript, nextjs, tutorial (comma-separated)"
          />
          <p className="text_label_comment mt-1">Separate tags with commas</p>
        </div>{" "}
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
          <label htmlFor="published" className="ml-2 text-sm font-medium">
            Publish immediately
          </label>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 btn_v1 disabled:cursor-not-allowed"
          >
            <Check className="w-4 h-4" />
            {isSubmitting ? "Creating..." : "Create Post"}
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
