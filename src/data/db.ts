import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI_LOCAL);

    console.log("Connected to the Database!");
  } catch (error) {
    console.log("Error connecting to the database ", error);
  }
}