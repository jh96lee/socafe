const express = require("express");

const pool = require("../pool");

const authenticateToken = require("../middlewares/user/authenticateToken");

const getTopics = require("../controllers/topic/getTopics");
const getUserFollowingTopics = require("../controllers/topic/getUserFollowingTopics");
const getAllTopicsWithIsFollowingTopicData = require("../controllers/topic/getAllTopicsWithIsFollowingTopicData");
const postTopicsToFollow = require("../controllers/topic/postTopicsToFollow");
const searchTopics = require("../controllers/topic/searchTopics");

const topicRouter = express.Router();

// REVIEW: this is for general topics fetching
topicRouter.get("/topic", getTopics);

// REVIEW: fetch ONLY the topics that the user is following
topicRouter.get(
	"/topic/following/following-topics",
	authenticateToken,
	getUserFollowingTopics
);

// REVIEW: fetch the topics the user is following and ALL other topics
topicRouter.get(
	"/topic/following/all-topics",
	authenticateToken,
	getAllTopicsWithIsFollowingTopicData
);

// REVIEW: post topics that the user decided to follow
topicRouter.post("/topic/follow", authenticateToken, postTopicsToFollow);

// REVIEW: update topics that user decided to follow
topicRouter.put("/topic/follow", authenticateToken, async (req, res) => {
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
});

// REVIEW: for searching topics
topicRouter.post("/search/topics", searchTopics);

module.exports = topicRouter;
