import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    // console.log(req.cookies); when logged in, sent the access and the refresh token in the cookies, checked those, got those. 
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request.");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(token, decodedToken); decoded token is basically the object having the info of the user stored in db

    if (!decodedToken) {
      throw new ApiError(401, "Could not verify the token!");
    }

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid access token!");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid access token!");
  }
});

export { verifyJWT };
