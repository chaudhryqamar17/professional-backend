import mongoose from "mongoose";
// import DB_NAME from "./constants.js";
import dbConnect from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

// import express from "express";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3001;

dbConnect()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error in app.on", err);
    });
    app.listen(port, () => {
      console.log(`Server is listening on localhost port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

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
