"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { MessageCircle, Send, Trash2, CheckCircle } from "lucide-react";
import Image from "next/image";

interface Comment {
  _id: string;
  postId: string;
  author: {
    _id: string;
    name: string;
    email: string;
    image?: string;
  };
  content: string;
  isAuthorReply: boolean;
  parentCommentId?: string;
  createdAt: string;
  updatedAt: string;
}

interface CommentsProps {
  postId: string;
  postAuthorEmail: string;
}

export default function Comments({ postId, postAuthorEmail }: CommentsProps) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${postId}`, {
        cache: "no-store",
      });
      const data = await response.json();

      if (response.ok) {
        setComments(data.comments);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      alert("Please sign in to comment");
      return;
    }

    if (!newComment.trim()) {
      return;
    }

    if (newComment.length > 1000) {
      alert("Comment is too long (max 1000 characters)");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          content: newComment.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setComments([...comments, data.comment]);
        setNewComment("");
      } else {
        alert(data.error || "Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      alert("Failed to post comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!confirm("Are you sure you want to delete this comment?")) {
      return;
    }

    try {
      const response = await fetch(`/api/comments?commentId=${commentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setComments(comments.filter((c) => c._id !== commentId));
      } else {
        const data = await response.json();
        alert(data.error || "Failed to delete comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Failed to delete comment");
    }
  };

  const canDeleteComment = (comment: Comment) => {
    if (!session?.user) return false;
    return (
      comment.author.email === session.user.email ||
      (session.user as any).role === "Admin"
    );
  };

  return (
    <div className="mt-8 border-t border-gray-300 pt-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <MessageCircle className="w-5 h-5" />
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      {session ? (
        <form onSubmit={handleSubmitComment} className="mb-6">
          <div className="flex gap-3">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "User"}
                width={32}
                height={32}
                className="rounded-full w-8 h-8 object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-semibold shrink-0">
                {session.user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
            <div className="flex-1">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment or ask a question..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={3}
                maxLength={1000}
                disabled={isSubmitting}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">
                  {newComment.length}/1000
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting || !newComment.trim()}
                  className="btn_v1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Posting..." : "Post Comment"}
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
          <p className="text-gray-600">
            Please sign in to comment on this post
          </p>
        </div>
      )}

      {/* Comments List */}
      {isLoading ? (
        <div className="text-center py-8 text-gray-500">
          Loading comments...
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No comments yet. Be the first to comment!
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className={`p-4 rounded-lg border ${
                comment.isAuthorReply
                  ? "bg-[#161b22] border-blue-500"
                  : "bg-[#0d1117] border-gray-600"
              }`}
            >
              <div className="flex gap-3">
                {comment.author.image ? (
                  <Image
                    src={comment.author.image}
                    alt={comment.author.name}
                    width={32}
                    height={32}
                    className="rounded-full w-8 h-8 object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-semibold shrink-0">
                    {comment.author.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold text-white">
                      {comment.author.name}
                    </span>
                    {comment.isAuthorReply && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Author
                      </span>
                    )}
                    <span className="text-xs text-gray-400">
                      {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-gray-300 whitespace-pre-wrap break-words">
                    {comment.content}
                  </p>
                </div>
                {canDeleteComment(comment) && (
                  <button
                    onClick={() => handleDeleteComment(comment._id)}
                    className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded transition"
                    aria-label="Delete comment"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
