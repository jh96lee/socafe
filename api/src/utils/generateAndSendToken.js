const jwt = require("jsonwebtoken");

const generateAndSendToken = (res, payloadObject) => {
	jwt.sign(payloadObject, process.env.JWT_SECRET, (err, token) => {
		// TODO: sending the token in cookie
		res.cookie("token", token, { httpOnly: true });

		// FIX: fix this later
		res.send({ token });
	});
};

module.exports = { generateAndSendToken };
