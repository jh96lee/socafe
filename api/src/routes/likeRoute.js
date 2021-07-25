const express = require("express");

const authenticateToken = require("../middlewares/user/authenticateToken");

const likePost = require("../controllers/like/likePost");
const unlikePost = require("../controllers/like/unlikePost");
const likeComment = require("../controllers/like/likeComment");
const unlikeComment = require("../controllers/like/unlikeComment");

const likeRouter = express.Router();

likeRouter.post("/like/post/:postID", authenticateToken, likePost);

likeRouter.delete("/unlike/post/:postID", authenticateToken, unlikePost);

likeRouter.post("/like/comment/:commentID", authenticateToken, likeComment);

likeRouter.delete(
	"/unlike/comment/:commentID",
	authenticateToken,
	unlikeComment
);

module.exports = likeRouter;
