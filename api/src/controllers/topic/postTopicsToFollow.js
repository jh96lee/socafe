const pool = require("../../pool");

const postTopicsToFollow = async (req, res) => {
	const { topicsToFollowArray } = req.body;

	const { userID } = res.locals;

	if (topicsToFollowArray.length === 0) {
		res.send({ success: "Success" });
	} else {
		const topicIDsArray = topicsToFollowArray.map((topic) => {
			return topic.id;
		});

		try {
			for (topicID of topicIDsArray) {
				await pool.queryToDatabase(
					`
					INSERT INTO topics_users(user_id, topic_id)
					VALUES ($1, $2);
					`,
					[userID, topicID]
				);
			}

			res.send({ success: "Success" });
		} catch (error) {
			res.send({
				error: {
					catch: "There has been an error while working with topics to follow",
				},
			});
		}
	}
};

module.exports = postTopicsToFollow;
