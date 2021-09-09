const express = require("express");

const authenticateToken = require("../middlewares/user/authenticateToken");

const getAggregateStats = require("../controllers/stat/getAggregateStats");
const getContentViewsStats = require("../controllers/stat/getContentViewsStats");
const getTopPosts = require("../controllers/stat/getTopPosts");

const statRouter = express.Router();

statRouter.get("/stats/aggregates", authenticateToken, getAggregateStats);

statRouter.get(
	"/stats/views/:contentType/:nDays",
	authenticateToken,
	getContentViewsStats
);

statRouter.get("/stats/top/:topBy", authenticateToken, getTopPosts);

module.exports = statRouter;
