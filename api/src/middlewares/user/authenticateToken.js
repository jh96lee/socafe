const jwt = require("jsonwebtoken");

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
				error: { general: "Access denied" },
			});
		} else {
			res.locals.userID = decoded.id;

			next();
		}
	});
};

module.exports = authenticateToken;
