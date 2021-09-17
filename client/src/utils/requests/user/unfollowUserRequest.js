import axios from "axios";

import { fetchToken } from "../../index";

const unfollowUserRequest = async (profileOwnerID) => {
	const token = fetchToken();

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/unfollow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default unfollowUserRequest;
