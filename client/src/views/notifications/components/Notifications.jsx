import * as React from "react";

import Notification from "./Notification";

const Notifications = ({ notifications }) => {
	return (
		<React.Fragment>
			{notifications.map((notification) => {
				return (
					<Notification
						key={`notification__${notification.id}`}
						notification={notification}
					/>
				);
			})}
		</React.Fragment>
	);
};

export default Notifications;
