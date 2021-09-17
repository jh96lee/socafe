import axios from "axios";

import { fetchToken } from "../../index";

const addPostViewRequest = async (postID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/post/view/${postID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default addPostViewRequest;
