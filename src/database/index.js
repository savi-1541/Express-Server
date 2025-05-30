import mongoose from "mongoose";

export const initializeDB = async () => {
  const DB_URL = process.env.DB_HOST;

  return await mongoose.connect(DB_URL ?? "");
};
