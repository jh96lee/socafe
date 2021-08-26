import * as React from "react";
import styled from "styled-components";

import Notification from "./Notification";

const NotificationsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
`;

const Notifications = ({ notifications }) => {
	return (
		<NotificationsStyle>
			{notifications.map((notification) => {
				return (
					<Notification
						key={`notification__${notification.id}`}
						notification={notification}
					/>
				);
			})}
		</NotificationsStyle>
	);
};

export default Notifications;
