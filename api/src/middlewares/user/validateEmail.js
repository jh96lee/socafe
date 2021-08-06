const isEmail = require("validator/lib/isEmail");

// REVIEW: validating if the user sent a valid email
const validateEmail = (req, res, next) => {
	const { email } = req.body;

	if (!email || email.length === 0) {
		return next();
	}

	const validationResult = isEmail(email);

	if (validationResult) {
		return next();
	} else {
		res.send({ error: { email: "Invalid email format" } });
	}
};

module.exports = validateEmail;
