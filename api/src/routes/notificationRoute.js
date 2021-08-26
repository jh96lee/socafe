const express = require("express");

const pool = require("../pool");

const authenticateToken = require("../middlewares/user/authenticateToken");

const postCommentNotifications = require("../controllers/notification/postCommentNotifications");
const postPostLikeNotification = require("../controllers/notification/postPostLikeNotification");
const deletePostLikeNotification = require("../controllers/notification/deletePostLikeNotification");
const postFollowingNotification = require("../controllers/notification/postFollowingNotification");
const deleteFollowingNotification = require("../controllers/notification/deleteFollowingNotification");
const getUserNotifications = require("../controllers/notification/getUserNotifications");
const putIsNotificationChecked = require("../controllers/notification/putIsNotificationChecked");
const getHomeFeedNotifications = require("../controllers/notification/getHomeFeedNotifications");

const notificationRouter = express.Router();

notificationRouter.post(
	"/notification/comment",
	authenticateToken,
	postCommentNotifications
);

notificationRouter.post(
	"/notification/post/:postID",
	authenticateToken,
	postPostLikeNotification
);

notificationRouter.delete(
	"/notification/post/:postID",
	authenticateToken,
	deletePostLikeNotification
);

notificationRouter.post(
	"/notification/follow/:leaderID",
	authenticateToken,
	postFollowingNotification
);

notificationRouter.delete(
	"/notification/follow/:leaderID",
	authenticateToken,
	deleteFollowingNotification
);

notificationRouter.get(
	"/notification/user",
	authenticateToken,
	getUserNotifications
);

notificationRouter.put(
	"/notification/status/:notificationID",
	authenticateToken,
	putIsNotificationChecked
);

notificationRouter.get(
	"/notification/feed",
	authenticateToken,
	getHomeFeedNotifications
);

module.exports = notificationRouter;
