const express = require("express");

const pool = require("../pool");

const authenticateToken = require("../middlewares/user/authenticateToken");

const getTopics = require("../controllers/topic/getTopics");
const getUserFollowingTopics = require("../controllers/topic/getUserFollowingTopics");
const getAllTopicsWithIsFollowingTopicData = require("../controllers/topic/getAllTopicsWithIsFollowingTopicData");
const postTopicsToFollow = require("../controllers/topic/postTopicsToFollow");
const searchTopics = require("../controllers/topic/searchTopics");
const getMostUsedTopics = require("../controllers/topic/getMostUsedTopics");
const putTopicsToFollow = require("../controllers/topic/putTopicsToFollow");

const topicRouter = express.Router();

topicRouter.get("/topic/explore", getMostUsedTopics);

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
topicRouter.put("/topic/follow", authenticateToken, putTopicsToFollow);

// REVIEW: for searching topics
topicRouter.post("/search/topics", searchTopics);

module.exports = topicRouter;
