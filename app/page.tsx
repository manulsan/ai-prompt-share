"use client";
import React, { useState, useEffect } from "react";
import { Search, FileText, Tag } from "lucide-react";
import Link from "next/link";
import PostStatusBadge from "@/app/components/PostStatusBadge";
import PagePagination from "@/app/components/PagePagination";
import LikeBadge from "@/app/components/LikeBadge";
import HashTags from "./components/HashTags";
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
  likes: number;
  likedBy: string[];
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
    <div className="flex gap-6 w-full max-w-7xl mx-auto px-4 py-6 min-h-screen">
      <section className="flex-1 min-w-0">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold mb-3 gradient-heading">
            Creative AI Prompt Posts
          </h1>
          <p className="text-base max-w-2xl mx-auto text-amber-400">
            Share ideas, stories, insights and experiences from our community of
            AI writers
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by title, content, or tags..."
              className="search_bar"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#57606a] hover:text-[#0969da] transition"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Loading State */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-[#57606a]">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#57606a]">
              {searchQuery
                ? "No posts found matching your search."
                : "No posts available yet."}
            </p>
          </div>
        ) : (
          <>
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="gradient-post-panel rounded-md overflow-hidden"
                >
                  <div className="p-4">
                    {/* Title - Clickable */}

                    <Link href={`/posts/${post.slug}`}>
                      <div className="flex items-center justify-between mb-2 gap-2">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <FileText className="w-4 h-4  shrink-0" />
                          <h3 className="text-base font-semibold text-[#5da2f1] line-clamp-1 hover:underline cursor-pointer">
                            {post.title}
                          </h3>
                        </div>
                        <PostStatusBadge published={post.published} />
                      </div>
                    </Link>

                    {/* Content Preview */}
                    {/* <p className="text-[#57606a] text-sm mb-3 line-clamp-3"> */}
                    <p className=" text-sm mb-3 line-clamp-3">
                      {stripMarkdown(post.content)}
                    </p>

                    {/* Tags */}
                    <HashTags tags={post.tags} />

                    {/* Author & Date & Status */}
                    <div className="flex items-center justify-between pt-3 border-t-[0.3px] border-[#606060]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#0969da] text-white flex items-center justify-center text-xs font-semibold">
                          {post.author.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="text-xs">{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LikeBadge
                          postId={post._id}
                          initialLikes={post.likes || 0}
                          initialLikedBy={post.likedBy || []}
                        />
                        <span className="text-xs">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
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
