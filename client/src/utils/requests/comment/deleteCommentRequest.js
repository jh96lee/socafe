import axios from "axios";

import { fetchToken } from "../../index";

const deleteCommentRequest = async (commentID) => {
	const token = fetchToken();

	const { data } = await axios({
		method: "DELETE",
		url: `http://localhost:8080/comment/delete/${commentID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return data;
};

export default deleteCommentRequest;
