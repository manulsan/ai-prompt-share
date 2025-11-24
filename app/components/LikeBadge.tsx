"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";

interface LikeBadgeProps {
  postId: string;
  initialLikes: number;
  initialLikedBy: string[];
}

const LikeBadge: React.FC<LikeBadgeProps> = ({
  postId,
  initialLikes,
  initialLikedBy,
}) => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email || "";

  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(initialLikedBy.includes(userEmail));
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (!session) {
      alert("Please sign in to like posts");
      return;
    }

    if (isLoading) return;

    setIsLoading(true);
    const newLikedState = !isLiked;

    // Optimistic update
    setIsLiked(newLikedState);
    setLikes((prev) => (newLikedState ? prev + 1 : prev - 1));

    try {
      const response = await fetch(`/api/posts`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, email: userEmail }),
      });

      if (!response.ok) {
        throw new Error("Failed to update like");
      }

      const data = await response.json();
      setLikes(data.likes);
      setIsLiked(data.likedBy.includes(userEmail));
    } catch (error) {
      console.error("Error updating like:", error);
      // Revert optimistic update on error
      setIsLiked(!newLikedState);
      setLikes((prev) => (newLikedState ? prev - 1 : prev + 1));
      alert("Failed to update like. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center gap-1 px-2 py-1 text-xs font-medium ${
        isLiked
          ? "text-[#cf222e]  hover:border-[#cf222e] hover:rounded-2xl hover:border"
          : "text-[#57606a]  hover:border-[#d0d7de] hover:rounded-2xl hover:border"
      } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-[#cf222e]" : ""}`} />
      <span>{likes}</span>
    </button>
  );
};

export default LikeBadge;
