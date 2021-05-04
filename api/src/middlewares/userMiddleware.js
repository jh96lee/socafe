const isEmail = require("validator/lib/isEmail");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../pool");

// REVIEW: validating if the user sent a valid email
const validateEmail = (req, res, next) => {
	const { email } = req.body;

	const validationResult = isEmail(email);

	if (validationResult) {
		next();
	} else {
		res.send({ error: { email: "Invalid Email" } });
	}
};

// REVIEW: checking if the email is already in use
const isEmailInUse = async (req, res, next) => {
	const { email } = req.body;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT id
			FROM users
			WHERE email=$1
			`,
			[email]
		);

		const userID = rows[0];

		if (userID) {
			res.send({
				error: { email: "This email address is already being used" },
			});
		} else {
			next();
		}
	} catch (error) {
		res.send({
			error: {
				error: "There has been an while checking if the email already exists",
			},
		});
	}
};

// REVIEW: check if the username is already being used
const isUsernameInUse = async (req, res, next) => {
	const { username } = req.body;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT id
			FROM users
			WHERE username=$1
			`,
			[username]
		);

		const userID = rows[0];

		if (userID) {
			res.send({
				error: { username: "This username is already being used" },
			});
		} else {
			next();
		}
	} catch (error) {
		res.send({
			error: {
				error:
					"There has been an while checking if the username already exists",
			},
		});
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

	// TODO: we can use the decoded payload to make some queries
	jwt.verify(clientSideToken, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			res.send({
				error: { error: "Access denied" },
			});
		} else {
			req.body.decoded = decoded;

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
