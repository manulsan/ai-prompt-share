import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Comment from "@/models/Comment";
import Post from "@/models/Post";
import User from "@/models/User";
import { getServerSession } from "next-auth";

// GET - Fetch comments for a post
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const comments = await Comment.find({ postId })
      .populate("author", "name email image")
      .sort({ createdAt: 1 }) // 오래된 것부터 표시
      .lean();

    return NextResponse.json(
      { comments },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error: any) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

// POST - Create a new comment
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const body = await req.json();
    const { postId, content, parentCommentId } = body;

    // Validate required fields
    if (!postId || !content) {
      return NextResponse.json(
        { error: "Post ID and content are required" },
        { status: 400 }
      );
    }

    // Validate content length
    if (content.trim().length === 0 || content.length > 1000) {
      return NextResponse.json(
        { error: "Content must be between 1 and 1000 characters" },
        { status: 400 }
      );
    }

    // Check if post exists
    const post = await Post.findById(postId).populate("author");
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Get user
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if this is an author reply
    const isAuthorReply = post.author._id.toString() === user._id.toString();

    // Create comment
    const newComment = await Comment.create({
      postId,
      author: user._id,
      content: content.trim(),
      isAuthorReply,
      parentCommentId: parentCommentId || null,
    });

    // Populate author info before returning
    await newComment.populate("author", "name email image");

    // Create notification for post author (if commenter is not the author)
    if (!isAuthorReply) {
      const Notification = (await import("@/models/Notification")).default;
      await Notification.create({
        recipient: post.author._id,
        sender: user._id,
        postId: post._id,
        commentId: newComment._id,
        type: "comment",
        message: `${user.name} commented on your post "${post.title}"`,
        isRead: false,
      });
    }

    return NextResponse.json(
      {
        message: "Comment created successfully",
        comment: newComment,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a comment
export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get("commentId");

    if (!commentId) {
      return NextResponse.json(
        { error: "Comment ID is required" },
        { status: 400 }
      );
    }

    // Find comment
    const comment = await Comment.findById(commentId).populate("author");
    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    // Get user
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if user is the comment author or admin
    const isAuthor = comment.author._id.toString() === user._id.toString();
    const isAdmin = user.role === "Admin";

    if (!isAuthor && !isAdmin) {
      return NextResponse.json(
        { error: "You can only delete your own comments" },
        { status: 403 }
      );
    }

    await Comment.findByIdAndDelete(commentId);

    return NextResponse.json({
      message: "Comment deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting comment:", error);
    return NextResponse.json(
      { error: "Failed to delete comment" },
      { status: 500 }
    );
  }
}
