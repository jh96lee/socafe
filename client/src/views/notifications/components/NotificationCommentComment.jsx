import * as React from "react";
import { Link } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationCommentComment = ({ notification, handleLinkOnClick }) => {
	const { instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`} onClick={handleLinkOnClick}>
				{instigator.full_name}
			</Link>{" "}
			left a comment under your comment on this{" "}
			<Link to={`/post/${post_id}`} onClick={handleLinkOnClick}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationCommentComment;
