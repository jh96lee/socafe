import axios from "axios";

import { fetchToken } from "../../index";

const unlikeCommentRequest = async (commentID) => {
	const token = fetchToken();

	await axios({
		method: "DELETE",
		url: `http://localhost:8080/comment/unlike/${commentID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default unlikeCommentRequest;
