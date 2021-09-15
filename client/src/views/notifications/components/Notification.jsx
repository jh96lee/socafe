import React from "react";

import { Avatar } from "../../shared";
import NotificationBody from "./NotificationBody";

import { NotificationStyle } from "../styles/NotificationStyle";
import { NotificationAlertStyle } from "../styles/NotificationAlertStyle";

const Notification = ({ notification }) => {
	const { instigator, is_notification_checked } = notification;

	return (
		<NotificationStyle>
			<Avatar
				userID={instigator.id}
				username={instigator.username}
				avatarURL={instigator.avatar_url}
				avatarSize="4.2rem"
			/>

			<NotificationBody notification={notification} />

			{!is_notification_checked && <NotificationAlertStyle />}
		</NotificationStyle>
	);
};

export default Notification;
