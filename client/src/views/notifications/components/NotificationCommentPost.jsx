import * as React from "react";
import { Link } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationCommentPost = ({ notification, handlePostLinkOnClick }) => {
	const { instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			commented on this{" "}
			<Link to={`/post/${post_id}`} onClick={handlePostLinkOnClick}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationCommentPost;
