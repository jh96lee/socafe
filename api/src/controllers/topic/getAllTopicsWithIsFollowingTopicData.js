const pool = require("../../pool");

const getAllTopicsWithIsFollowingTopicData = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	try {
		const { rows } = await pool.queryToDatabase(
			`
            SELECT
                id,
                title,
                topic_url,
                CASE 
                    WHEN id IN 
                    (
                        SELECT
                        topic_id AS id
                        FROM post_topics
                        JOIN topics_users
                        ON post_topics.id=topics_users.topic_id
                        WHERE user_id=$1
                    ) 
                    THEN 1
                    ELSE 0
                END AS is_following_topic
            FROM post_topics;
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

module.exports = getAllTopicsWithIsFollowingTopicData;
