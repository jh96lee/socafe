const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadComment = require("../controllers/comment/uploadComment");
const getParentComments = require("../controllers/comment/getParentComments");
const getCommentReplies = require("../controllers/comment/getCommentReplies");
const insertCommentLike = require("../controllers/comment/insertCommentLike");
const deleteCommentLike = require("../controllers/comment/deleteCommentLike");
const deleteComment = require("../controllers/comment/deleteComment");

const commentRouter = express.Router();

// TODO: upload comment
commentRouter.post("/upload/post/comment", authenticateToken, uploadComment);

// REVIEW: get comments for specific post
commentRouter.get("/comment/parent/:postID/:userID", getParentComments);

// TODO: fetch my parent comment's replies
commentRouter.get("/comment/reply/:parentCommentID/:userID", getCommentReplies);

commentRouter.post(
	"/comment/like/:commentID",
	authenticateToken,
	insertCommentLike
);

commentRouter.delete(
	"/comment/unlike/:commentID",
	authenticateToken,
	deleteCommentLike
);

commentRouter.delete(
	"/comment/delete/:commentID",
	authenticateToken,
	deleteComment
);

module.exports = commentRouter;
