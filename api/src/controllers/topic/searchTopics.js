const pool = require("../../pool");

const searchTopics = async (req, res) => {
	const { searchInput } = req.body;

	const likeSearchInput = `%${searchInput}%`;

	try {
		const { rows } = await pool.queryToDatabase(
			`
			SELECT
			* FROM
			post_topics
			WHERE
			LOWER(title) LIKE $1
			`,
			[likeSearchInput]
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while searching for post topics",
			},
		});
	}
};

module.exports = searchTopics;
