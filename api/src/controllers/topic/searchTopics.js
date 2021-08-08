const pool = require("../../pool");

const calculatePaginationIndexes = require("../../utils/common/calculatePaginationIndexes");

const searchTopics = async (req, res) => {
	const { searchInput } = req.body;

	const { page, size, betweenFront, betweenBack } =
		calculatePaginationIndexes(req);

	const likeSearchInput = `%${searchInput}%`;

	try {
		const topics = await pool.queryToDatabase(
			`
			SELECT
			id,
			title,
			topic_url
			FROM (
				SELECT
				*,
				ROW_NUMBER() OVER (ORDER BY id) AS index 
				FROM post_topics
				WHERE LOWER(title) LIKE $1
			) AS t
			WHERE index BETWEEN $2 AND $3;
			`,
			[likeSearchInput, betweenFront, betweenBack]
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
				WHERE LOWER(title) LIKE $1
			) AS t
			WHERE index > $2
			LIMIT 1;
			`,
			[likeSearchInput, betweenBack]
		);

		const nextAPIEndpoint = nextTopic.rows[0]
			? `/search/topics?page=${page + 1}&size=${size}`
			: null;

		res.send({
			contents: topics.rows,
			next: nextAPIEndpoint,
		});
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while searching for post topics",
			},
		});
	}
};

module.exports = searchTopics;
