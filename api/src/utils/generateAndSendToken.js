const jwt = require("jsonwebtoken");

const generateAndSendToken = (res, payloadObject) => {
	jwt.sign(payloadObject, process.env.JWT_SECRET, (err, token) => {
		if (err) {
			res.send({
				error: {
					general: "There has been an error while generating your token",
				},
			});
		} else {
			res.send({ token, success: "Success" });
		}
	});
};

module.exports = generateAndSendToken;
