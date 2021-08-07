const { parseImage } = require("../../utils/image/multer");
const { uploader } = require("../../middlewares/cloudinaryMiddleware");

const uploadImage = async (req, res) => {
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
					catch:
						"There has been an error while uploading your image to the cloud",
				},
			});
		}
	} else {
		res.send({
			error: { image: "The server wasn't able to receive your file" },
		});
	}
};

module.exports = uploadImage;
