import axios from "axios";

import { fetchToken } from "../../index";

const bookmarkPostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/post/bookmark/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default bookmarkPostRequest;
