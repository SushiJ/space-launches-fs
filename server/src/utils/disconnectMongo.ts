import mongoose from "mongoose";

export default async function disconnectDB() {
  await mongoose.disconnect();
}
