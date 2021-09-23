import axios from "axios";

import { fetchToken } from "../../index";

const addStoryViewRequest = async (storyID) => {
	const token = fetchToken();

	await axios({
		method: "POST",
		url: `http://localhost:8080/story/view/${storyID}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

export default addStoryViewRequest;
