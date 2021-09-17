import axios from "axios";

import { fetchToken } from "../../index";

const likeCommentRequest = async (commentID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/comment/like/${commentID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default likeCommentRequest;
