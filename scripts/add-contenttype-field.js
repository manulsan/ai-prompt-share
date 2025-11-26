// Script to add contentType field to existing posts
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "your-mongodb-uri-here";

async function addContentTypeField() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    const Post = mongoose.connection.collection("posts");

    // Update all posts without contentType to have default "markdown"
    const result = await Post.updateMany(
      { contentType: { $exists: false } },
      { $set: { contentType: "markdown" } }
    );

    console.log(
      `Updated ${result.modifiedCount} posts with default contentType: "markdown"`
    );

    // If you have specific posts that should be JSON, update them separately:
    // const jsonResult = await Post.updateMany(
    //   { slug: 'your-json-post-slug' },
    //   { $set: { contentType: 'json' } }
    // );
    // console.log(`Updated ${jsonResult.modifiedCount} posts to contentType: "json"`);

    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

addContentTypeField();
