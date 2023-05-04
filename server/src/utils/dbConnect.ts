import mongoose from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017/nasa?retryWrites=true&w=majority";
export default async function connectDB() {
  await mongoose.connect(MONGO_URL);
}
