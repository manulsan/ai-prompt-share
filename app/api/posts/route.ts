import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const userId = searchParams.get("userId") || "";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Build search query
    let query: any = {};

    // Filter by userId if provided
    if (userId) {
      query.author = userId;
    }

    if (search) {
      const searchConditions = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
      ];

      if (userId) {
        query.$and = [{ author: userId }, { $or: searchConditions }];
        delete query.author;
      } else {
        query.$or = searchConditions;
      }
    }

    const posts = await Post.find(query)
      .populate("author", "name email")
      .sort({ likes: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Ensure likes and likedBy fields are present
    const postsWithDefaults = posts.map((post) => {
      const postObj = post.toObject();
      return {
        ...postObj,
        likes: postObj.likes ?? 0,
        likedBy: postObj.likedBy ?? [],
      };
    });

    const total = await Post.countDocuments(query);

    return NextResponse.json(
      {
        posts: postsWithDefaults,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const body = await req.json();
    const { title, content, slug, tags, published } = body;

    // Validate required fields
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "Title, content, and slug are required" },
        { status: 400 }
      );
    }

    // Parse tags from comma-separated string to array
    const tagsArray = tags
      ? tags
          .split(",")
          .map((tag: string) => tag.trim())
          .filter(Boolean)
      : [];

    // Get user ID from session (you'll need to fetch from DB by email)
    const User = (await import("@/models/User")).default;
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new post
    const newPost = await Post.create({
      title,
      content,
      slug,
      tags: tagsArray,
      published,
      author: user._id,
      // likes: 0,
      // likedBy: [],
    });
    console.log("New post created:", newPost);
    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating post:", error);

    // Handle duplicate slug error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { postId, email } = await request.json();

    if (!email || !postId) {
      return NextResponse.json(
        { error: "Email and postId are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const post = await Post.findById(postId);

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
