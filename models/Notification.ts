import { Schema, model, models, Document } from "mongoose";

export interface INotification extends Document {
  recipient: Schema.Types.ObjectId; // Post 작성자
  sender: Schema.Types.ObjectId; // 댓글 작성자
  postId: Schema.Types.ObjectId;
  commentId: Schema.Types.ObjectId;
  type: "comment";
  message: string;
  isRead: boolean;
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
    },
    type: {
      type: String,
      enum: ["comment"],
      default: "comment",
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for better query performance
NotificationSchema.index({ recipient: 1, isRead: 1, createdAt: -1 });

const Notification =
  models.Notification ||
  model<INotification>("Notification", NotificationSchema);

export default Notification;
