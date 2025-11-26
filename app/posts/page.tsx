"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2, PenSquare, X } from "lucide-react";
import { useSession } from "next-auth/react";
import PostStatusBadge from "@/app/components/PostStatusBadge";
import PagePagination from "@/app/components/PagePagination";
import { useResponsiveContainer } from "@/app/hooks/useResponsiveContainer";

interface Post {
  _id: string;
  title: string;
  slug: string;
  author: {
    name: string;
    email: string;
  };
  published: boolean;
  tags: string[];
  createdAt: string;
}

// localhost:3000/posts
export default function PostsPage() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [userId, setUserId] = useState<string | null>(null);
  const [filterAuthorEmail, setFilterAuthorEmail] = useState<string | null>(
    null
  );
  const limit = 10;
  const { getContainerClass } = useResponsiveContainer();

  useEffect(() => {
    if (session?.user) {
      fetchUserId();
    }
  }, [session]);

  useEffect(() => {
    if (userId !== null) {
      fetchPosts();
    }
  }, [page, userId, filterAuthorEmail]);

  const fetchUserId = async () => {
    try {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      setUserId(data?.user?.id || "");
    } catch (error) {
      console.error("Error fetching user ID:", error);
      setUserId("");
    }
  };

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      let url = `/api/posts?page=${page}&limit=${limit}`;

      if (filterAuthorEmail) {
        url += `&authorEmail=${encodeURIComponent(filterAuthorEmail)}`;
      } else if (userId) {
        url += `&userId=${userId}`;
      }

      console.log("Fetching posts with URL:", url);
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch posts");
      }

      console.log("Fetched posts:", data.posts.length);
      setPosts(data.posts);
      setTotalPages(data.pagination.totalPages);
      setTotal(data.pagination.total);
    } catch (error: any) {
      console.error("Error fetching posts:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthorClick = (email: string) => {
    console.log("Author clicked:", email);
    console.log("Current filterAuthorEmail:", filterAuthorEmail);

    if (filterAuthorEmail === email) {
      // If clicking the same author, clear filter
      console.log("Clearing filter");
      setFilterAuthorEmail(null);
    } else {
      // Filter by author
      console.log("Setting filter to:", email);
      setFilterAuthorEmail(email);
    }
    setPage(1); // Reset to first page
  };

  const clearAuthorFilter = () => {
    setFilterAuthorEmail(null);
    setPage(1);
  };

  const handleDelete = async (postId: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete post");
      }

      alert("Post deleted successfully!");
      fetchPosts(); // Refresh list
    } catch (error: any) {
      console.error("Error deleting post:", error);
      alert(error.message || "Failed to delete post");
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={getContainerClass()}>
      <div className="flex justify-between items-center mb-8 ">
        <div>
          <h1 className="text-3xl font-bold">Posts</h1>
          {filterAuthorEmail && (
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm text-gray-400">Filtered by author:</span>
              <button
                onClick={clearAuthorFilter}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md flex items-center gap-2"
              >
                {posts[0]?.author.name || filterAuthorEmail}
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
        <Link href="/posts/new" className="btn_v1">
          <PenSquare className="w-4 h-4" />
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          No posts yet. Create your first post!
        </p>
      ) : (
        <>
          {/* Desktop Table View - Hidden on mobile */}
          <div className="hidden md:block rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 font-bold">
              <thead className="border-b ">
                <tr>
                  {["Title", "Author", "Status", "Created", "Actions"].map(
                    (header, index) => (
                      <th
                        key={header}
                        className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                          index === 4 ? "text-right" : ""
                        }`}
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {posts.map((post) => (
                  <tr key={post._id} className="hover:bg-gray-900">
                    <td className="px-6 py-3">
                      <div className="text-sm font-bold">{post.title}</div>
                      {/* <div className="text-sm font-medium">/{post.slug}</div> */}
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleAuthorClick(post.author.email)}
                        className="text-sm text-blue-400 hover:text-blue-200 hover:underline cursor-pointer transition-colors duration-200 font-medium"
                        title="Click to filter by this author"
                      >
                        {post.author.name}
                      </button>
                    </td>
                    <td className="px-6 py-3">
                      <PostStatusBadge published={post.published} />
                    </td>
                    <td className="px-6 py-3 text-sm">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-3 text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/posts/edit/${post._id}`}
                          className="text-blue-700 hover:text-blue-500 p-1"
                          title="Edit"
                          aria-label={`Edit post ${post.title}`}
                        >
                          <Pencil className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post._id, post.title)}
                          className="text-red-800 hover:text-red-500 p-1"
                          title="Delete"
                          aria-label={`Delete post ${post.title}`}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View - Visible only on mobile */}
          <div className="md:hidden space-y-4">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 hover:border-[#58a6ff] transition"
              >
                {/* Title and Slug */}
                <div className="mb-3">
                  <h3 className="text-base font-bold text-white mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/60">/{post.slug}</p>
                </div>

                {/* Info Grid */}
                <div className="space-y-2 mb-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Author:</span>
                    <button
                      onClick={() => handleAuthorClick(post.author.email)}
                      className="text-blue-400 hover:text-blue-200 hover:underline cursor-pointer transition-colors duration-200 font-medium"
                      title="Click to filter by this author"
                    >
                      {post.author.name}
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-white/60">Status:</span>
                      <PostStatusBadge published={post.published} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/60">Created:</span>
                      <span className="text-white">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-3 border-t border-[#30363d]">
                  <Link
                    href={`/posts/edit/${post._id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition text-sm font-medium"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post._id, post.title)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition text-sm font-medium"
                    aria-label={`Delete post ${post.title}`}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Pagination */}
      <PagePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      {/* Results info */}
      {/* {total > 0 && (
        <p className="text-center text-sm mt-4">
          {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of {total}{" "}
          posts
        </p>
      )} */}
    </div>
  );
}
