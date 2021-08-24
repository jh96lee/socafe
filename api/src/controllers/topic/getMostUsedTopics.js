const pool = require("../../pool");

const getMostUsedTopics = async (req, res) => {
	try {
		const mostUsedTopicsData = await pool.queryToDatabase(
			`
			SELECT
			id,
			title,
			topic_url,
			total
			FROM post_topics
			JOIN (
				SELECT
				COUNT(*) AS total,
				topic_id
				FROM topics_posts
				GROUP BY topic_id
			) AS t
			ON post_topics.id=t.topic_id
			ORDER BY total DESC
			LIMIT 15;
			`,
			[]
		);

		res.send(mostUsedTopicsData.rows);
	} catch (error) {
		console.log(error);
		res.send({
			error: {
				catch:
					"There has been an error while fetching for most used post topics",
			},
		});
	}
};

module.exports = getMostUsedTopics;
