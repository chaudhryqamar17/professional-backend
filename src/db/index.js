import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export default async function dbConnect() {
  try {
    const connectionIntance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n DB connected!!! on host ${connectionIntance.connection.host}`);
  } catch (error) {
    console.log("from catch", error);
    process.exit(1);
  }
}
