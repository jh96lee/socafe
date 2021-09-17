import axios from "axios";

import { fetchToken } from "../../index";

const unlikePostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/post/unlike/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default unlikePostRequest;
