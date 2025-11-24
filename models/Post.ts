import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    slug: {
      type: String,
      unique: true,
      required: [true, "Slug is required"],
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
      required: true,
    },
    likedBy: {
      type: [String],
      default: [],
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const Post = models.Post || model("Post", PostSchema);

export default Post;
