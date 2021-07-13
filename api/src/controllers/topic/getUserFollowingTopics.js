const pool = require("../../pool");

const getUserFollowingTopics = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
            post_topics.id AS id,
            title,
            topic_url
            FROM post_topics
            JOIN topics_users
            ON post_topics.id=topics_users.topic_id
            WHERE user_id=$1
            `,
			[userID]
		);

		res.send(rows);
	} catch (error) {
		res.send({
			error: {
				catch: "There has been an error while retrieving post topics",
			},
		});
	}
};

module.exports = getUserFollowingTopics;
