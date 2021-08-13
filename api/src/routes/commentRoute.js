const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadPostComment = require("../controllers/comment/uploadPostComment");
const getPostComments = require("../controllers/comment/getPostComments");
const getCommentReplies = require("../controllers/comment/getCommentReplies");
const likeComment = require("../controllers/comment/likeComment");
const unlikeComment = require("../controllers/comment/unlikeComment");
const deleteComment = require("../controllers/comment/deleteComment");

const commentRouter = express.Router();

// TODO: upload comment
commentRouter.post(
	"/upload/post/comment",
	authenticateToken,
	uploadPostComment
);

// REVIEW: get comments for specific post
commentRouter.get("/comment/parent/:postID/:userID", getPostComments);

// TODO: fetch my parent comment's replies
commentRouter.get("/comment/reply/:parentCommentID/:userID", getCommentReplies);

commentRouter.post("/comment/like/:commentID", authenticateToken, likeComment);

commentRouter.delete(
	"/comment/unlike/:commentID",
	authenticateToken,
	unlikeComment
);

commentRouter.delete(
	"/comment/delete/:commentID",
	authenticateToken,
	deleteComment
);

module.exports = commentRouter;
