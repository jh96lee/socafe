const { config, uploader } = require("cloudinary");

// TODO: convert this to a middleware
const cloudinaryConfigMiddleware = (req, res, next) => {
	config({
		cloud_name: "fullstackprojectcloud",
		api_key: process.env.CLOUDINARY_API_KEY,
		api_secret: process.env.CLOUDINARY_SECRET,
	});

	next();
};

module.exports = { cloudinaryConfigMiddleware, uploader };
