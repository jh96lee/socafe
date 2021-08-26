import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const checkedNotificationsRequest = async (notificationID) => {
	const token = fetchToken();

	await axios({
		method: "PUT",
		url: `http://localhost:8080/notification/status/${notificationID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
