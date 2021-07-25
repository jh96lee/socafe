const express = require("express");
const authenticateToken = require("../middlewares/user/authenticateToken");

const uploadPostComment = require("../controllers/comment/uploadPostComment");
const getMyParentComments = require("../controllers/comment/getMyParentComments");
const getOtherUsersParentComments = require("../controllers/comment/getOtherUsersParentComments");
const getParentCommentReplies = require("../controllers/comment/getParentCommentReplies");

const commentRouter = express.Router();

// TODO: upload comment
commentRouter.post(
	"/upload/post/comment",
	authenticateToken,
	uploadPostComment
);

// TODO: fetch my parent comments
commentRouter.get("/comment/my/:userID/:postID", getMyParentComments);

// TODO: fetch my other users' parent comments
commentRouter.get(
	"/comment/other/:userID/:postID",
	getOtherUsersParentComments
);

// TODO: fetch my parent comment's replies
commentRouter.get(
	"/comment/reply/:userID/:parentCommentID",
	getParentCommentReplies
);

module.exports = commentRouter;
