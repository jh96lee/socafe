const express = require("express");
const { multerUploads, parseImage } = require("../utils/multer");
const {
	cloudinaryConfigMiddleware,
	uploader,
} = require("../middlewares/cloudinaryMiddleware");

const fileRouter = express.Router();

// TODO: middleware provides the appropriate credentials and multerUploads will check for an "image" field and upload it to memory
fileRouter.post(
	"/upload/image",
	cloudinaryConfigMiddleware,
	multerUploads,
	async (req, res) => {
		if (req.file) {
			const file = parseImage(req).content;

			try {
				const imageObject = await uploader.upload(file);

				res.send({
					id: imageObject.public_id,
					url: imageObject.url,
					width: imageObject.width,
					height: imageObject.height,
					success: "Image uploaded successfully",
				});
			} catch (error) {
				res.send({
					error: {
						image:
							"There has been an error while uploading your image to the cloud",
					},
				});
			}
		} else {
			res.send({
				error: { image: "The server wasn't able to receive your file" },
			});
		}
	}
);

fileRouter.post(
	"/delete/image",
	cloudinaryConfigMiddleware,
	async (req, res) => {
		await uploader.destroy(req.body.id, (result, error) => {
			if (result) {
				res.send({
					success: "Your image has been deleted successfully",
				});
			} else if (error) {
				res.send({
					error: {
						general: "There has been an error while deleting the image",
					},
				});
			}
		});
	}
);

module.exports = fileRouter;
