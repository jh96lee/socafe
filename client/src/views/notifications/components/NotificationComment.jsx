import * as React from "react";
import { Link } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationComment = ({ notification, handlePostLinkOnClick }) => {
	const { id, instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			left a comment under your comment on this{" "}
			<Link to={`/post/${post_id}`} onClick={() => handlePostLinkOnClick(id)}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationComment;
