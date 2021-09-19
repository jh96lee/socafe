import * as React from "react";
import { Link } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationLikeComment = ({ notification, handlePostLinkOnClick }) => {
	const { instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			left a like on your{" "}
			<Link to={`/post/${post_id}`} onClick={handlePostLinkOnClick}>
				comment
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationLikeComment;
