import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Avatar } from "../../views/shared";
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
} from "../../redux/notifications/notificationsAction";

import { convertDate } from "../../utils/date/convertDate";

import styled from "styled-components";

const NotificationStyle = styled.div``;

const NotificationContentStyle = styled.div``;

const Notification = ({ notification }) => {
	const dispatch = useDispatch();

	const {
		created_at,
		instigator,
		instigated_comment_id,
		received_comment_id,
		post_id,
		notification_type,
	} = notification;

	const handlePostLinkOnClick = () => {
		dispatch(setNotiPostID(post_id));

		dispatch(setNotiInstigatedCommentID(instigated_comment_id));

		dispatch(setNotiReceivedCommentID(received_comment_id));
	};

	return (
		<NotificationStyle>
			<Avatar
				userID={instigator.id}
				username={instigator.username}
				avatarURL={instigator.avatar_url}
				avatarSize="5.5rem"
			/>

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

				<p>{convertDate(created_at)}</p>
			</NotificationContentStyle>
		</NotificationStyle>
	);
};

export default Notification;
