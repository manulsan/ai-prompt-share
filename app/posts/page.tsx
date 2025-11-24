"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import PostStatusBadge from "@/app/components/PostStatusBadge";
import PagePagination from "@/app/components/PagePagination";

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
  const limit = 10;

  useEffect(() => {
    if (session?.user) {
      fetchUserId();
    }
  }, [session]);

  useEffect(() => {
    if (userId !== null) {
      fetchPosts();
    }
  }, [page, userId]);

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
      const url = userId
        ? `/api/posts?page=${page}&limit=${limit}&userId=${userId}`
        : `/api/posts?page=${page}&limit=${limit}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch posts");
      }

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
    // <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="max-w-6xl mx-auto px-4 pt-2">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <Link
          href="/posts/new"
          className="px-4 py-1 bg-gray-600 text-white text-sm font-semibold rounded-lg hover:bg-gray-800"
        >
          Create Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          No posts yet. Create your first post!
        </p>
      ) : (
        <div className=" rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 font-bold">
            <thead className="border-b ">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-900">
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold">{post.title}</div>
                    <div className="text-sm font-medium">/{post.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm ">{post.author.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <PostStatusBadge published={post.published} />
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/posts/edit/${post._id}`}
                        className="text-blue-700 hover:text-blue-500 p-1"
                        title="Edit"
                      >
                        <Pencil className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post._id, post.title)}
                        className="text-red-800 hover:text-red-500 p-1"
                        title="Delete"
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
      )}

      {/* Pagination */}
      <PagePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      {/* Results info */}
      {total > 0 && (
        <p className="text-center text-sm mt-4">
          Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of{" "}
          {total} posts
        </p>
      )}
    </div>
  );
}
