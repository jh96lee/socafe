const pool = require("../../pool");

const getMostUsedTopics = async (req, res) => {
	try {
		const mostUsedTopicsData = await pool.queryToDatabase(
			`
			SELECT
			id,
			title,
			topic_url,
			count AS topic_total_used
			FROM post_topics 
			JOIN (
				SELECT
				topic_id,
				COUNT(*)
				FROM posts
				JOIN topics_posts
				ON posts.id=topics_posts.post_id
				GROUP BY topic_id
			) AS t
			ON post_topics.id=t.topic_id 
			ORDER BY count DESC
			LIMIT 10;
			`,
			[]
		);

		res.send(mostUsedTopicsData.rows);
	} catch (error) {
		res.send({
			error: {
				catch:
					"There has been an error while fetching for most used post topics",
			},
		});
	}
};

module.exports = getMostUsedTopics;
