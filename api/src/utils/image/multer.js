const multer = require("multer");
const DatauriParser = require("datauri/parser");
const path = require("path");

const storage = multer.memoryStorage();

// TODO: single("image") specifies the field name that multer should go to when it's looking for a file
const multerUploads = multer({ storage }).single("image");

const parser = new DatauriParser();

// REVIEW: the file is coming as a buffer because we're pushing it to memory before we can
// REVIEW: upload it to Cloudinary
const parseImage = (req) => {
	return parser.format(path.extname(req.file.originalname), req.file.buffer);
};

module.exports = { multerUploads, parseImage };
