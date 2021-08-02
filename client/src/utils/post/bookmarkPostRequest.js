import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const bookmarkPostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/post/bookmark/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
