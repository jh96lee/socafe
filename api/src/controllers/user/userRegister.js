const pool = require("../../pool");
const generateAndSendToken = require("../../utils/generateAndSendToken");

const userRegister = async (req, res) => {
	const { fullName, email, username, password } = req.body;

	const avatarURL =
		"https://res.cloudinary.com/fullstackprojectcloud/image/upload/v1621981182/default_svra7n.png";

	try {
		const { rows } = await pool.queryToDatabase(
			`
            INSERT INTO users(full_name, email, username, password, avatar_url)
            VALUES($1, $2, $3, $4, $5)
            RETURNING id, full_name, username, avatar_url;
            `,
			[fullName, email, username, password, avatarURL]
		);

		const user = rows[0];

		if (user) {
			generateAndSendToken(res, {
				id: user.id,
				full_name: user.full_name,
				username: user.username,
				avatar_url: user.avatar_url,
			});
		} else {
			res.send({
				error: {
					general:
						"There has been an error while inserting data into the database",
				},
			});
		}
	} catch (error) {
		res.send({
			error: {
				general: "There has been an error while processing your registration",
			},
		});
	}
};

module.exports = userRegister;
