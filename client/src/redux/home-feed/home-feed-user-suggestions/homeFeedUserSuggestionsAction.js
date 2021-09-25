import axios from "axios";

import { fetchToken } from "../../../utils";

const startFetchingHomeFeedUserSuggestions = () => ({
	type: "START_FETCHING_HOME_FEED_USER_SUGGESTIONS",
});

const fetchedHomeFeedUserSuggestions = (suggestions) => ({
	type: "FETCHED_HOME_FEED_USER_SUGGESTIONS",
	payload: suggestions,
});

const endFetchingHomeFeedUserSuggestions = () => ({
	type: "END_FETCHING_HOME_FEED_USER_SUGGESTIONS",
});

export const fetchHomeFeedUserSuggestions = () => async (dispatch) => {
	dispatch(startFetchingHomeFeedUserSuggestions());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/user/suggestions",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const { error } = data;

	if (!error) {
		dispatch(fetchedHomeFeedUserSuggestions(data));

		dispatch(endFetchingHomeFeedUserSuggestions());
	}
};
