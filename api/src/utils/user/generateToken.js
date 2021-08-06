const jwt = require("jsonwebtoken");

const generateToken = (payloadObject) => {
	const token = jwt.sign(payloadObject, process.env.JWT_SECRET);

	return token;
};

module.exports = generateToken;
