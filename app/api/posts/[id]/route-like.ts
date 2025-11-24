import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { email } = await request.json();
    const { id } = params;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await connectDB();

    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const likedByArray = post.likedBy || [];
    const isAlreadyLiked = likedByArray.includes(email);

    if (isAlreadyLiked) {
      // Unlike
      post.likes = Math.max((post.likes || 0) - 1, 0);
      post.likedBy = likedByArray.filter((e: string) => e !== email);
    } else {
      // Like
      post.likes = (post.likes || 0) + 1;
      post.likedBy = [...likedByArray, email];
    }

    await post.save();

    return NextResponse.json({
      likes: post.likes,
      likedBy: post.likedBy,
    });
  } catch (error: any) {
    console.error("Error updating like:", error);
    return NextResponse.json(
      { error: "Failed to update like", details: error.message },
      { status: 500 }
    );
  }
}
