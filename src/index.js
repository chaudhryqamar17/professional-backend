import mongoose from "mongoose";
// import DB_NAME from "./constants.js";
import dbConnect from "./db/index.js";
import dotenv from "dotenv";

// import express from "express";

dotenv.config({
  path: "./env",
});

dbConnect();

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("from app.on ", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`listening on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.log("from catch", error);
//   }
// })();
