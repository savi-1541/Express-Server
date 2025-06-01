import mongoose, { Schema } from "mongoose";
import { books } from "./books.js";
import { authors } from "./author.js";

const analyticsSchema = new Schema(
  {
    userCount: {
      type: Number,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: books,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: authors,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  },
);

export const analytics = mongoose.model("analytic", analyticsSchema);
