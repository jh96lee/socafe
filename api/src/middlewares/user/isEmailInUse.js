const pool = require("../../pool");

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
			// REVIEW: use res.locals instead of appending properties to req.body and moving onto the next middleware
			res.locals.email = "This email is already being used";

			next();
		} else {
			next();
		}
	} catch (error) {
		res.send({
			error: { general: "There has been an error while validating your email" },
		});
	}
};

module.exports = isEmailInUse;
