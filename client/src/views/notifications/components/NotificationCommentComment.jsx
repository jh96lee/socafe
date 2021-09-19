import * as React from "react";
import { Link } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationCommentComment = ({
	notification,
	handlePostLinkOnClick,
}) => {
	const { instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			left a comment under your comment on this{" "}
			<Link to={`/post/${post_id}`} onClick={handlePostLinkOnClick}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationCommentComment;