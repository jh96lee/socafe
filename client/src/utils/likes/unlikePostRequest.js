import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const unlikePostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/unlike/post/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
