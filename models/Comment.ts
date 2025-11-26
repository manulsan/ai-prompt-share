import { Schema, model, models, Document } from "mongoose";

export interface IComment extends Document {
  postId: Schema.Types.ObjectId;
  author: Schema.Types.ObjectId;
  content: string;
  isAuthorReply: boolean; // Post 작성자의 답변인지 구분
  parentCommentId?: Schema.Types.ObjectId; // 대댓글을 위한 필드 (optional)
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
      index: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 1000,
    },
    isAuthorReply: {
      type: Boolean,
      default: false,
    },
    parentCommentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for better query performance
CommentSchema.index({ postId: 1, createdAt: -1 });
CommentSchema.index({ author: 1 });

const Comment = models.Comment || model<IComment>("Comment", CommentSchema);

export default Comment;
