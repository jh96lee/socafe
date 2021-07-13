const pool = require("../../pool");

const getTopics = async (req, res) => {
	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT id, title, topic_url
            FROM post_topics;
            `
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching post topics",
			},
		});
	}
};

module.exports = getTopics;
