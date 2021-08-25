import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const followUserRequest = async (profileOwnerID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/notification/follow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	await axios({
		method: "POST",
		url: `http://localhost:8080/follow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
