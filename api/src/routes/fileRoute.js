const express = require("express");
const { multerUploads, parseImage } = require("../utils/multer");
const {
	cloudinaryConfigMiddleware,
	uploader,
} = require("../middlewares/cloudinaryMiddleware");

const uploadImage = require("../controllers/file/uploadImage");
const deleteImage = require("../controllers/file/deleteImage");

const fileRouter = express.Router();

// TODO: middleware provides the appropriate credentials and multerUploads will check for an "image" field and upload it to memory
fileRouter.post(
	"/upload/image",
	cloudinaryConfigMiddleware,
	multerUploads,
	uploadImage
);

fileRouter.post("/delete/image", cloudinaryConfigMiddleware, deleteImage);

module.exports = fileRouter;
