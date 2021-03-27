const express = require("express");
const { multerUploads, parseImage } = require("../utils/multer");
const {
	cloudinaryConfigMiddleware,
	uploader,
} = require("../middlewares/cloudinaryConfigMiddleware");

const { authenticateToken } = require("../middlewares/userMiddleware");

const fileRouter = express.Router();

// TODO: middleware provides the appropriate credentials and multerUploads will check for an "image" field and upload it to memory
fileRouter.post(
	"/upload/file",
	authenticateToken,
	cloudinaryConfigMiddleware,
	multerUploads,
	async (req, res) => {
		if (req.file) {
			const file = parseImage(req).content;

			const imageObject = await uploader.upload(file);

			res.send({ url: imageObject.url });
		} else {
			res.send({
				message: "There has been an error",
			});
		}
	}
);

module.exports = fileRouter;
