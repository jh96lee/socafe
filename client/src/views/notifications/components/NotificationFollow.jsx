import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationFollow = ({ notification, handleLinkOnClick }) => {
	const { instigator } = notification;

	const location = useLocation();

	return (
		<NotificationTextStyle
			isFontsBigger={location.pathname.includes("notifications")}
		>
			<Link to={`/user/${instigator.username}`} onClick={handleLinkOnClick}>
				{instigator.full_name}
			</Link>{" "}
			started following you
		</NotificationTextStyle>
	);
};

export default NotificationFollow;
