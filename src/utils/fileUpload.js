import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dm4rvbu7y",
  api_key: "783485434816578",
  api_secret: "7hy7nH5mSHlf9xITwUPC1ANaby0",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(
      localFilePath,
      {
        resource_type: "auto",
      },
      (err, res) => {
        if (err) {
          console.log("Error in file uploading", err);
          return null;
        }
        return res;
      }
    );
    // console.log("File is uploaded on cloudinary", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error in file uploading", error);
    return null;
  }
};

const removeFromCloudinary = async (publidId) => {
  try {
    if (!publidId) return null;
    const response = await cloudinary.uploader.destroy(
      publidId,
      (err, res) => {
        if (err) {
          console.log("Error in file removing", err);
          return null;
        }
        return res;
      }
    );
    // console.log("File is removed from cloudinary", response.url);
    return response;
  } catch (error) {
    console.log("Error in file removing", error);
    return null;
  }
};

export { uploadOnCloudinary, removeFromCloudinary };
