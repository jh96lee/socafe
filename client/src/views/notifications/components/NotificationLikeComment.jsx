import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationLikeComment = ({ notification, handleLinkOnClick }) => {
	const { instigator, post_id } = notification;

	const location = useLocation();

	return (
		<NotificationTextStyle
			isFontsBigger={location.pathname.includes("notifications")}
		>
			<Link to={`/user/${instigator.username}`} onClick={handleLinkOnClick}>
				{instigator.full_name}
			</Link>{" "}
			left a like on your{" "}
			<Link to={`/post/${post_id}`} onClick={handleLinkOnClick}>
				comment
			</Link>
		</NotificationTextStyle>
	);
};

export default NotificationLikeComment;
