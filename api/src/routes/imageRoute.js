const express = require("express");
const { multerUploads } = require("../utils/image/multer");
const {
	cloudinaryConfigMiddleware,
} = require("../middlewares/cloudinaryMiddleware");

const uploadImage = require("../controllers/image/uploadImage");
const deleteImage = require("../controllers/image/deleteImage");

const imageRouter = express.Router();

// TODO: middleware provides the appropriate credentials and multerUploads will check for an "image" field and upload it to memory
imageRouter.post(
	"/upload/image",
	cloudinaryConfigMiddleware,
	multerUploads,
	uploadImage
);

imageRouter.post("/delete/image", cloudinaryConfigMiddleware, deleteImage);

module.exports = imageRouter;
