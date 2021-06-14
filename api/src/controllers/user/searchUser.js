const pool = require("../../pool");

const searchUser = async (req, res) => {
	const { searchInput } = req.body;

	const like = `%${searchInput}%`;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT 
			id, full_name, username, avatar_url FROM 
			users 
			WHERE 
			LOWER(username) LIKE $1
			`,
			[like]
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				searchUser: "There has been an error while searching for users",
			},
		});
	}
};

module.exports = searchUser;
