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
			// REVIEW: create an error property within req.body with the value being an object
			// REVIEW: then in the next middleware, we use dot notation to add in properties to req.body.error
			// FIX: use res.locals instead of appending properties to req.body
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
