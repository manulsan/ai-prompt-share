// scripts/migrate-add-likes.js
// Run this ONLY if you want to add likes/likedBy to ALL existing posts immediately
// Otherwise, they'll be added automatically when posts are accessed/updated

import connectDB from "../lib/mongodb.js";
import Post from "../models/Post.js";

async function migrateLikes() {
  try {
    await connectDB();

    // Update all posts that don't have likes field
    const result = await Post.updateMany(
      { likes: { $exists: false } }, // Find posts without likes
      {
        $set: {
          likes: 0,
          likedBy: [],
        },
      }
    );

    console.log(`Migration complete: ${result.modifiedCount} posts updated`);
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

migrateLikes();
