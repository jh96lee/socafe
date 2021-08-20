import axios from "axios";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const startFetchingHomeFeedStories = () => ({
	type: "START_FETCHING_HOME_FEED_STORIES",
});

const fetchedHomeFeedStories = (stories) => ({
	type: "FETCHED_HOME_FEED_STORIES",
	payload: stories,
});

const endFetchingHomeFeedStories = () => ({
	type: "END_FETCHING_HOME_FEED_STORIES",
});

export const fetchHomeFeedStories = () => async (dispatch) => {
	dispatch(startFetchingHomeFeedStories());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/story/feed",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const { error } = data;

	if (!error) {
		dispatch(fetchedHomeFeedStories(data));
	}

	dispatch(endFetchingHomeFeedStories());
};
