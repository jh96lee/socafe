import axios from "axios";

import { fetchToken } from "../cookie/fetchToken";

export const deleteComment = async (commentID) => {
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
