const isEmail = require("validator/lib/isEmail");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { checkEmailInUse, checkUsernameInUse } = require("../repos/userRepo");

const validateEmail = (req, res, next) => {
	const userDataObject = req.body;

	const email = userDataObject.email;

	const validationResult = isEmail(email);

	if (validationResult) {
		next();
	} else {
		res.send({ message: "Invalid Email" });
	}
};

const isEmailInUse = async (req, res, next) => {
	const userDataObject = req.body;

	const { email } = userDataObject;

	const user = await checkEmailInUse(email);

	if (user) {
		res.send({ message: "This email address is already being used" });
	} else {
		next();
	}
};

const isUsernameInUse = async (req, res, next) => {
	const userDataObject = req.body;

	const { username } = userDataObject;

	const user = await checkUsernameInUse(username);

	if (user) {
		res.send({ message: "This username is already being used" });
	} else {
		next();
	}
};

const hashPassword = (req, res, next) => {
	const salt = bcrypt.genSaltSync(10);

	const hashedPassword = bcrypt.hashSync(req.body.password, salt);

	req.body.password = hashedPassword;

	next();
};

// REVIEW: when the user sends the token back to the server, JWT decodes the header and payload of the token
// REVIEW: and uses the provided secret and generates a digital signature and compares it to the signature of the token
// REVIEW: that has been provided. If valid, next(), if not, error message gets sent
const authenticateToken = (req, res, next) => {
	const authorization = req.headers.authorization;

	const bearerTokenArray = authorization.split(" ");

	const clientSideToken = bearerTokenArray[1];

	jwt.verify(clientSideToken, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			res.send({
				message: "Access Denied",
			});
		} else {
			next();
		}
	});
};

module.exports = {
	validateEmail,
	isEmailInUse,
	isUsernameInUse,
	hashPassword,
	authenticateToken,
};
