const { uploader } = require("../../middlewares/cloudinaryMiddleware");

const destroyImage = async (imagePublicID) => {
	const result = await uploader.destroy(imagePublicID, (result, error) => {
		if (result) {
			return {
				id: imagePublicID,
				success: "Your image has been deleted successfully",
			};
		} else if (error) {
			return {
				error: { image: "There has been an error while deleting the image" },
			};
		}
	});

	return result;
};

module.exports = destroyImage;
