const pool = require("../../pool");

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
			res.locals.username = "This username is already being used";

			next();
		} else {
			next();
		}
	} catch (error) {
		res.send({
			error: {
				general: "There has been an error while validating your username",
			},
		});
	}
};

module.exports = isUsernameInUse;
