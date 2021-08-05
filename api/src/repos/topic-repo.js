const pool = require("../pool");

class TopicRepo {
	static async getUserFollowingTopics(userID) {
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

		return rows;
	}
}

module.exports = TopicRepo;
