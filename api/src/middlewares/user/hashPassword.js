const bcrypt = require("bcryptjs");

const hashPassword = (req, res, next) => {
	const salt = bcrypt.genSaltSync(10);

	const hashedPassword = bcrypt.hashSync(req.body.password, salt);

	req.body.password = hashedPassword;

	next();
};

module.exports = hashPassword;
