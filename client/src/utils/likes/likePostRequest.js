import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const likePostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/like/post/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
