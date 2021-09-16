const express = require("express");

const authenticateToken = require("../middlewares/user/authenticateToken");

const insertCommentNotifications = require("../controllers/notification/insertCommentNotifications");
const getUserNotifications = require("../controllers/notification/getUserNotifications");
const putIsNotificationChecked = require("../controllers/notification/putIsNotificationChecked");
const getHomeFeedNotifications = require("../controllers/notification/getHomeFeedNotifications");

const notificationRouter = express.Router();

notificationRouter.post(
	"/notification/comment",
	authenticateToken,
	insertCommentNotifications
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
