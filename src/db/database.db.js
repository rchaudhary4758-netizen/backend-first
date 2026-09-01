import mongoose from "mongoose";
// import { DB_NAME } from "./constant.js";
import { DB_NAME } from "../Constant.js";

const connectDB = async () => {
  try {
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n mongoDB connected !! DB host: ${connectionInstance.connection.host}\n`
    );
    console.log("MongoDB connected successfully! \n");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;