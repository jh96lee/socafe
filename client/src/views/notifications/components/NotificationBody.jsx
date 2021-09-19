import * as React from "react";
import { useDispatch } from "react-redux";

import NotificationLike from "./NotificationLike";
import NotificationFollow from "./NotificationFollow";
import NotificationPost from "./NotificationPost";
import NotificationTag from "./NotificationTag";
import NotificationComment from "./NotificationComment";
import NotificationReply from "./NotificationReply";

import {
	setNotiPostID,
	setNotiInstigatedCommentID,
	setNotiReceivedCommentID,
} from "../../../redux/notifications/notificationsAction";

import {
	convertDate,
	updateIsNotificationCheckedRequest,
} from "../../../utils";

import { NotificationBodyStyle } from "../styles/NotificationBodyStyle";

const NotificationBody = ({ notification }) => {
	const dispatch = useDispatch();

	const {
		created_at,
		post_id,
		notification_type,
		instigated_comment_id,
		received_comment_id,
	} = notification;

	const handlePostLinkOnClick = (notificationID, notificationType) => {
		const commentNotificationTypes = ["COMMENT", "TAG", "REPLY"];

		dispatch(setNotiPostID(post_id));

		// FIX
		// if (commentNotificationTypes.includes(notificationType)) {
		dispatch(setNotiInstigatedCommentID(instigated_comment_id));

		dispatch(setNotiReceivedCommentID(received_comment_id));
		// }

		updateIsNotificationCheckedRequest(notificationID);
	};

	return (
		<NotificationBodyStyle>
			{notification_type === "LIKE" && (
				<NotificationLike
					notification={notification}
					handlePostLinkOnClick={handlePostLinkOnClick}
				/>
			)}

			{notification_type === "FOLLOW" && (
				<NotificationFollow notification={notification} />
			)}

			{notification_type === "POST" && (
				<NotificationPost
					notification={notification}
					handlePostLinkOnClick={handlePostLinkOnClick}
				/>
			)}

			{notification_type === "TAG" && (
				<NotificationTag
					notification={notification}
					handlePostLinkOnClick={handlePostLinkOnClick}
				/>
			)}

			{notification_type === "COMMENT" && (
				<NotificationComment
					notification={notification}
					handlePostLinkOnClick={handlePostLinkOnClick}
				/>
			)}

			{notification_type === "REPLY" && (
				<NotificationReply
					notification={notification}
					handlePostLinkOnClick={handlePostLinkOnClick}
				/>
			)}

			<span>{convertDate(created_at)}</span>
		</NotificationBodyStyle>
	);
};

export default NotificationBody;
