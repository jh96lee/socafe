const express = require("express");

const authenticateToken = require("../middlewares/user/authenticateToken");
const followUser = require("../controllers/follow/followUser");
const unfollowUser = require("../controllers/follow/unfollowUser");

const followRouter = express.Router();

followRouter.post("/follow/:leaderID", authenticateToken, followUser);

followRouter.delete("/unfollow/:leaderID", authenticateToken, unfollowUser);

module.exports = followRouter;
