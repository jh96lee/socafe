import axios from "axios";

import { fetchToken } from "../../index";

const likePostRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/post/like/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default likePostRequest;
