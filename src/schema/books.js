import mongoose, { Schema } from "mongoose";
import { authors } from "./author.js";

const bookSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: authors,
      required: true,
    },
    inStock: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
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

export const books = mongoose.model("book", bookSchema);
