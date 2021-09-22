import * as React from "react";
import { useLocation } from "react-router-dom";

import { Avatar } from "../../shared";
import NotificationBody from "./NotificationBody";

import { NotificationStyle } from "../styles/NotificationStyle";
import { NotificationAlertStyle } from "../styles/NotificationAlertStyle";

const Notification = ({ notification, notificationAvatarSize }) => {
	const location = useLocation();

	const { instigator, is_notification_checked } = notification;

	return (
		<NotificationStyle>
			<Avatar
				userID={instigator.id}
				username={instigator.username}
				avatarURL={instigator.avatar_url}
				avatarSize={
					location.pathname.includes("notifications") ? "4.5rem" : "4rem"
				}
			/>

			<NotificationBody notification={notification} />

			{!is_notification_checked && <NotificationAlertStyle />}
		</NotificationStyle>
	);
};

export default Notification;
