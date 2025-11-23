"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import PostStatusBadge from "@/app/components/PostStatusBadge";
import PagePagination from "@/app/components/PagePagination";
//import UserSidebar from "@/app/components/UserSidebar";

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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to strip markdown for preview
  const stripMarkdown = (markdown: string) => {
    return markdown
      .replace(/#{1,6}\s+/g, "") // Remove heading markers
      .replace(/\*\*(.+?)\*\*/g, "$1") // Remove bold
      .replace(/\*(.+?)\*/g, "$1") // Remove italic
      .replace(/`{1,3}[^`]*`{1,3}/g, "") // Remove code blocks
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Remove links, keep text
      .replace(/^>\s+/gm, "") // Remove blockquote markers
      .replace(/^[-*+]\s+/gm, "") // Remove list markers
      .replace(/^\d+\.\s+/gm, "") // Remove numbered list markers
      .replace(/~~~[^~]*~~~/g, "") // Remove code fences
      .replace(/\n{2,}/g, " ") // Replace multiple newlines with space
      .replace(/\n/g, " ") // Replace single newlines with space
      .trim();
  };

  useEffect(() => {
    fetchPosts();
  }, [searchQuery, currentPage]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        search: searchQuery,
        page: currentPage.toString(),
        limit: "9",
      });

      const response = await fetch(`/api/posts?${params}`);
      const data = await response.json();

      if (response.ok) {
        setPosts(data.posts);
        setTotalPages(data.pagination.totalPages);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
    fetchPosts();
  };

  return (
    <div className="flex gap-6 w-full max-w-7xl mx-auto px-4 py-2 justify-between">
      <section className="flex-1 min-w-0">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {/* Discover & Share
            <br /> */}
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creative AI Prompt Posts
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore ideas, stories, and insights from our community of AI
            writers
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by title, content, or tags..."
              className="w-full px-6 py-4 pr-12 text-gray-900 border-2 border-gray-300 rounded-xl focus:border-indigo-500 focus:outline-none shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {searchQuery
                ? "No posts found matching your search."
                : "No posts available yet."}
            </p>
          </div>
        ) : (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-linear-to-br from-white via-indigo-50/30 to-purple-50/30 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-indigo-100"
                >
                  <div className="p-4 md:p-2 lg:p-4">
                    {/* Title - Clickable */}
                    <Link href={`/posts/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-indigo-600 cursor-pointer transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    {/* Content Preview */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {stripMarkdown(post.content)}
                    </p>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Author & Date & Status */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-semibold">
                          {post.author.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-sm text-gray-700">
                          {post.author.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                        <PostStatusBadge published={post.published} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <PagePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </section>

      {/* User Sidebar - visible on md+ screens */}
      {/* <UserSidebar /> */}
    </div>
  );
}
