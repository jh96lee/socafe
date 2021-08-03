const express = require("express");
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

// REVIEW: for searching topics
topicRouter.post("/search/topics", searchTopics);

module.exports = topicRouter;
