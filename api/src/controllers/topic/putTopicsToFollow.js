const pool = require("../../pool");

const putTopicsToFollow = async (req, res) => {
	const userID = parseInt(res.locals.userID);

	const { topicsToFollowArray } = req.body;

	// REVIEW: logic is different when updating topics to follow
	// REVIEW: when a user selects topics to follow and a empty array is sent, that means he or she doesn't want to follow any topic
	// REVIEW: but when an empty array is sent when updating, that means the user unfollowed all topics
	await pool.queryToDatabase(
		`
			DELETE
			FROM topics_users
			WHERE user_id=$1;
			`,
		[userID]
	);

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
};

module.exports = putTopicsToFollow;
