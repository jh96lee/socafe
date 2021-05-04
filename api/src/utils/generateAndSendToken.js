const jwt = require("jsonwebtoken");

const generateAndSendToken = (res, payloadObject) => {
	jwt.sign(payloadObject, process.env.JWT_SECRET, (err, token) => {
		if (err) {
			res.send({
				error: { error: "There has been an while generating your token" },
			});
		} else {
			res.send({ token, success: { success: "Success" } });
		}
	});
};

module.exports = { generateAndSendToken };
