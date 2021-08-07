const { uploader } = require("../../middlewares/cloudinaryMiddleware");

const deleteImage = async (req, res) => {
	await uploader.destroy(req.body.id, (result, error) => {
		if (result) {
			res.send({
				id: req.body.id,
				success: "Your image has been deleted successfully",
			});
		} else if (error) {
			res.send({
				error: {
					image: "There has been an error while deleting the image",
				},
			});
		}
	});
};

module.exports = deleteImage;
