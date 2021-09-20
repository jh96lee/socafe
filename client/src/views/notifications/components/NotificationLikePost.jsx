import * as React from "react";
import { Link } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationLikePost = ({ notification, handleLinkOnClick }) => {
	const { id, instigator, post_id } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`} onClick={handleLinkOnClick}>
				{instigator.full_name}
			</Link>{" "}
			liked your{" "}
			<Link to={`/post/${post_id}`} onClick={handleLinkOnClick}>
				post
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationLikePost;
