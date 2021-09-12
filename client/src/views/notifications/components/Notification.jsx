import React from "react";
import { useDispatch } from "react-redux";

import { Avatar } from "../../shared";
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

import { convertDate } from "../../../utils/date/convertDate";
import { checkedNotificationsRequest } from "../../../utils/notification/checkedNotificationRequest";

import styled from "styled-components";

const NotificationStyle = styled.div`
	position: relative;
	display: flex;
	width: 100%;
`;

const NotificationContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.5rem;
	margin-left: 1.2rem;
`;

const NotificationAlert = styled.div`
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 50%;
	background-color: #6495ed;
	align-self: center;
	margin-left: auto;
`;

const Notification = ({ notification }) => {
	const dispatch = useDispatch();

	const {
		created_at,
		instigator,
		instigated_comment_id,
		received_comment_id,
		post_id,
		notification_type,
		is_notification_checked,
	} = notification;

	const handlePostLinkOnClick = (notificationID) => {
		dispatch(setNotiPostID(post_id));

		dispatch(setNotiInstigatedCommentID(instigated_comment_id));

		dispatch(setNotiReceivedCommentID(received_comment_id));

		checkedNotificationsRequest(notificationID);
	};

	return (
		<NotificationStyle>
			<Avatar
				userID={instigator.id}
				username={instigator.username}
				avatarURL={instigator.avatar_url}
				avatarSize="4.5rem"
			/>

			{/* FIX: convert this to an object */}
			<NotificationContentStyle>
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
			</NotificationContentStyle>

			{!is_notification_checked && <NotificationAlert />}
		</NotificationStyle>
	);
};

export default Notification;
