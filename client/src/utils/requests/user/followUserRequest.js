import axios from "axios";

import { fetchToken } from "../../index";

const followUserRequest = async (profileOwnerID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/follow/${profileOwnerID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default followUserRequest;
