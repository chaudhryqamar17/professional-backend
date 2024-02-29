import { Router } from "express";
import {
  registerUser,
  logoutUser,
  loginUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.js";
import { verifyJWT } from "../middlewares/auth.js";

const router = Router();

// http://localhost:3000/api/v1/users/register
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

http://localhost:3000/api/v1/users/login
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);


export default router;
