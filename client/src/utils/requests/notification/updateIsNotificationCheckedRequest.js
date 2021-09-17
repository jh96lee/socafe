import axios from "axios";

import { fetchToken } from "../../index";

const updateIsNotificationCheckedRequest = async (notificationID) => {
	const token = fetchToken();

	await axios({
		method: "PUT",
		url: `http://localhost:8080/notification/status/${notificationID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default updateIsNotificationCheckedRequest;
