const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadPostComment = require("../controllers/comment/uploadPostComment");
const getMyParentComments = require("../controllers/comment/getMyParentComments");
const getOtherParentComments = require("../controllers/comment/getOtherParentComments");
const getParentCommentReplies = require("../controllers/comment/getParentCommentReplies");
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

// TODO: fetch my parent comments
commentRouter.get("/comment/parent/my/:userID/:postID", getMyParentComments);

// TODO: fetch my other users' parent comments
commentRouter.get(
	"/comment/parent/other/:userID/:postID",
	getOtherParentComments
);

// TODO: fetch my parent comment's replies
commentRouter.get(
	"/comment/reply/:userID/:parentCommentID",
	getParentCommentReplies
);

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
