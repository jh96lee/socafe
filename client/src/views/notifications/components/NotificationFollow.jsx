import * as React from "react";
import { Link } from "react-router-dom";

import { NotificationTextStyle } from "../styles/NotificationTextStyle";

const NotificationFollow = ({ notification }) => {
	const { instigator } = notification;

	return (
		<NotificationTextStyle>
			<Link to={`/user/${instigator.username}`}>{instigator.full_name}</Link>{" "}
			started following you
		</NotificationTextStyle>
	);
};

export default NotificationFollow;
