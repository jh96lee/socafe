import * as React from "react";
import { useDispatch } from "react-redux";

import NotificationCommentPost from "./NotificationCommentPost";
import NotificationReply from "./NotificationReply";
import NotificationCommentComment from "./NotificationCommentComment";
import NotificationCommentTag from "./NotificationCommentTag";
import NotificationFollow from "./NotificationFollow";
import NotificationLikePost from "./NotificationLikePost";
import NotificationLikeComment from "./NotificationLikeComment";
import NotificationPostTag from "./NotificationPostTag";

import {
	setNotiInstigatedCommentID,
	setNotiReceivedCommentID,
} from "../../../redux/notifications/active-notification/activeNotificationAction";

import {
	convertDate,
	updateIsNotificationCheckedRequest,
} from "../../../utils";

import { NotificationBodyStyle } from "../styles/NotificationBodyStyle";

const NotificationBody = ({ notification }) => {
	const dispatch = useDispatch();

	const {
		id,
		created_at,
		notification_type,
		instigated_comment_id,
		received_comment_id,
	} = notification;

	const handleLinkOnClick = () => {
		const commentNotificationTypes = [
			"COMMENT_POST",
			"COMMENT_TAG",
			"COMMENT_COMMENT",
			"LIKE_COMMENT",
			"REPLY",
		];

		if (commentNotificationTypes.includes(notification_type)) {
			dispatch(setNotiInstigatedCommentID(instigated_comment_id));

			dispatch(setNotiReceivedCommentID(received_comment_id));
		}

		updateIsNotificationCheckedRequest(id);
	};

	return (
		<NotificationBodyStyle>
			{notification_type === "COMMENT_POST" && (
				<NotificationCommentPost
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			{notification_type === "REPLY" && (
				<NotificationReply
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			{notification_type === "COMMENT_COMMENT" && (
				<NotificationCommentComment
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			{notification_type === "COMMENT_TAG" && (
				<NotificationCommentTag
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			{notification_type === "FOLLOW" && (
				<NotificationFollow
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			{notification_type === "LIKE_POST" && (
				<NotificationLikePost
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			{notification_type === "LIKE_COMMENT" && (
				<NotificationLikeComment
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			{notification_type === "POST_TAG" && (
				<NotificationPostTag
					notification={notification}
					handleLinkOnClick={handleLinkOnClick}
				/>
			)}

			<span>{convertDate(created_at)}</span>
		</NotificationBodyStyle>
	);
};

export default NotificationBody;
