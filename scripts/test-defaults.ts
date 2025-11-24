// Test script to verify default values are applied
// Run with: node --loader tsx scripts/test-defaults.ts

import connectDB from "../lib/mongodb";
import Post from "../models/Post";
import User from "../models/User";

async function testDefaults() {
  try {
    await connectDB();
    console.log("Connected to DB");

    // Find a test user
    const user = await User.findOne();
    if (!user) {
      console.log("No user found. Create a user first.");
      return;
    }

    // Create a post WITHOUT specifying likes/likedBy
    const testPost = await Post.create({
      title: "Test Default Values",
      content: "Testing if likes and likedBy get default values",
      slug: "test-defaults-" + Date.now(),
      tags: ["test"],
      published: true,
      author: user._id,
    });

    console.log("\n=== POST CREATED ===");
    console.log("Title:", testPost.title);
    console.log("Likes:", testPost.likes); // Should be 0
    console.log("LikedBy:", testPost.likedBy); // Should be []
    console.log("\n=== DEFAULT VALUES APPLIED? ===");
    console.log("likes field exists:", "likes" in testPost);
    console.log("likedBy field exists:", "likedBy" in testPost);
    console.log("likes value:", testPost.likes);
    console.log("likedBy value:", testPost.likedBy);

    // Check the actual MongoDB document
    const rawDoc = await Post.findById(testPost._id).lean();
    console.log("\n=== RAW MONGODB DOCUMENT ===");
    console.log(JSON.stringify(rawDoc, null, 2));

    // Clean up
    await Post.findByIdAndDelete(testPost._id);
    console.log("\n✓ Test post deleted");

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

testDefaults();
