const pool = require("../../pool");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const getTopics = async (req, res) => {
	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	try {
		const topics = await pool.queryToDatabase(
			`
            SELECT
			id,
			topic_url,
			title
			FROM (
				SELECT 
				*,
				ROW_NUMBER() OVER (ORDER BY id) AS index
				FROM post_topics
			) AS t
			WHERE index BETWEEN $1 AND $2;
            `,
			[betweenFront, betweenBack]
		);

		const nextTopic = await pool.queryToDatabase(
			`
			SELECT
			id
			FROM (
				SELECT 
				*,
				ROW_NUMBER() OVER (ORDER BY id) AS index
				FROM post_topics
			) AS t
			WHERE index > $1
			LIMIT 1;
			`,
			[betweenBack]
		);

		const nextAPIEndpoint = nextTopic.rows[0]
			? `/topic?page=${page + 1}&size=${size}`
			: null;

		res.send({
			contents: topics.rows,
			next: nextAPIEndpoint,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while fetching post topics",
			},
		});
	}
};

module.exports = getTopics;
