const jwt = require("jsonwebtoken");

const generateAndSendToken = (res, payloadObject) => {
	jwt.sign(payloadObject, process.env.JWT_SECRET, (err, token) => {
		if (err) {
			res.send({ message: { error: "There has been an error" } });
		} else {
			res.send({ token, message: { success: "Success" } });
		}
	});
};

module.exports = { generateAndSendToken };
