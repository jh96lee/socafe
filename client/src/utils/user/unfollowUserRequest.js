import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const unfollowUserRequest = async (profileOwnerID) => {
	const token = fetchToken();

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/notification/follow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/unfollow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
