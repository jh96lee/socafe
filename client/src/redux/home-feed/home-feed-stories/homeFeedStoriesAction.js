import axios from "axios";

import { fetchToken } from "../../../utils";

const startFetchingHomeFeedStories = () => ({
	type: "START_FETCHING_HOME_FEED_STORIES",
});

const fetchedHomeFeedStories = (homeFeedStories) => ({
	type: "FETCHED_HOME_FEED_STORIES",
	payload: homeFeedStories,
});

const endFetchingHomeFeedStories = () => ({
	type: "END_FETCHING_HOME_FEED_STORIES",
});

const startFetchingExtraHomeFeedStories = () => ({
	type: "START_FETCHING_EXTRA_HOME_FEED_STORIES",
});

const fetchedExtraHomeFeedStories = (homeFeedStories) => ({
	type: "FETCHED_EXTRA_HOME_FEED_STORIES",
	payload: homeFeedStories,
});

const endFetchingExtraHomeFeedStories = () => ({
	type: "END_FETCHING_EXTRA_HOME_FEED_STORIES",
});

const setHomeFeedStoriesNextAPIEndpoint = (apiEndpoint) => ({
	type: "SET_HOME_FEED_STORIES_NEXT_API_ENDPOINT",
	payload: apiEndpoint,
});

export const setHomeFeedStoriesPage = () => ({
	type: "SET_HOME_FEED_STORIES_PAGE",
});

// REVIEW: this is triggered when homeFeedStories does not exist
// REVIEW: which is when the user refreshes a page, or directly entered in a story rendering URL
export const fetchCurrentUserStories = (userID) => async (dispatch) => {
	dispatch(startFetchingHomeFeedStories());

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/story/stories/${userID}`,
	});

	const { error } = data;

	if (error) {
		dispatch(fetchedHomeFeedStories(null));
	} else {
		dispatch(fetchedHomeFeedStories([data]));
	}

	dispatch(endFetchingHomeFeedStories());
};

export const fetchHomeFeedStories =
	(pageSize, customQueryString = "") =>
	async (dispatch) => {
		dispatch(startFetchingHomeFeedStories());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/story/feed?page=1&size=${pageSize}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, contents, next } = data;

		if (!error) {
			dispatch(fetchedHomeFeedStories(contents));

			dispatch(setHomeFeedStoriesNextAPIEndpoint(next));

			dispatch(endFetchingHomeFeedStories());
		}
	};

export const fetchExtraHomeFeedStories =
	(nextAPIEndpoint) => async (dispatch) => {
		dispatch(startFetchingExtraHomeFeedStories());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080${nextAPIEndpoint}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, contents, next } = data;

		if (!error) {
			dispatch(fetchedExtraHomeFeedStories(contents));

			dispatch(setHomeFeedStoriesNextAPIEndpoint(next));

			dispatch(endFetchingExtraHomeFeedStories());
		}
	};
