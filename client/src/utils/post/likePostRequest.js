import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const likePostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/notification/post/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	await axios({
		method: "POST",
		url: `http://localhost:8080/post/like/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
