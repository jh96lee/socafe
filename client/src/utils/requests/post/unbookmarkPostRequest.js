import axios from "axios";

import { fetchToken } from "../../index";

const unbookmarkPostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/post/unbookmark/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default unbookmarkPostRequest;
