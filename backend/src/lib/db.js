import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("Unable to set connection link to db");
    const conn = await mongoose.connect(MONGO_URI);
    console.log("MongoDB connect: ", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    process.exit(1); //{0 means success, 1 means fail}
  }
};
