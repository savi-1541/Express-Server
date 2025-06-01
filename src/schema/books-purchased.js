import mongoose, { Schema } from "mongoose";
import { books } from "./books.js";
import { users } from "./user.js";

const bookPurchasedSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: users,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: books,
    },
    purchasedAt: {
      type: Date,
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

export const booksPurchased = mongoose.model(
  "books_purchased",
  bookPurchasedSchema,
);
