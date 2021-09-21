import axios from "axios";

import { fetchToken } from "../../utils";

const startFetchingExploreTopics = () => ({
	type: "START_FETCHING_EXPLORE_TOPICS",
});

const fetchedExploreTopics = (topics) => ({
	type: "FETCHED_EXPLORE_TOPICS",
	payload: topics,
});

const endFetchingExploreTopics = () => ({
	type: "END_FETCHING_EXPLORE_TOPICS",
});

const startFetchingExplorePosts = () => ({
	type: "START_FETCHING_EXPLORE_POSTS",
});

const fetchedExplorePosts = (explorePosts) => ({
	type: "FETCHED_EXPLORE_POSTS",
	payload: explorePosts,
});

const endFetchingExplorePosts = () => ({
	type: "END_FETCHING_EXPLORE_POSTS",
});

const startFetchingExtraExplorePosts = () => ({
	type: "START_FETCHING_EXTRA_EXPLORE_POSTS",
});

const fetchedExtraExplorePosts = (extraExplorePosts) => ({
	type: "FETCHED_EXTRA_EXPLORE_POSTS",
	payload: extraExplorePosts,
});

const endFetchingExtraExplorePosts = () => ({
	type: "END_FETCHING_EXTRA_EXPLORE_POSTS",
});

export const setExplorePostsPage = (isReset) => ({
	type: "SET_EXPLORE_POSTS_PAGE",
	payload: isReset,
});

export const setSelectedTopicIDsArray = (idsArray) => ({
	type: "SET_SELECTED_TOPIC_IDS_ARRAY",
	payload: idsArray,
});

export const setExplorePostsNextAPIEndpoint = (nextAPIEndpoint) => ({
	type: "SET_EXPLORE_POSTS_NEXT_API_ENDPOINT",
	payload: nextAPIEndpoint,
});

export const resetExplore = () => ({
	type: "RESET_EXPLORE",
});

export const fetchExploreTopics = () => async (dispatch) => {
	dispatch(startFetchingExploreTopics());

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/topic/explore",
	});

	const { error } = data;

	if (!error) {
		dispatch(fetchedExploreTopics(data));

		dispatch(endFetchingExploreTopics());
	}
};

export const fetchExplorePosts =
	(pageSize, customQueryString = "") =>
	async (dispatch) => {
		dispatch(startFetchingExplorePosts());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/post/explore?page=1&size=${pageSize}&${customQueryString}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, contents, next } = data;

		if (!error) {
			dispatch(fetchedExplorePosts(contents));

			dispatch(setExplorePostsNextAPIEndpoint(next));

			dispatch(endFetchingExplorePosts());
		}
	};

export const fetchExtraExplorePosts = (nextAPIEndpoint) => async (dispatch) => {
	dispatch(startFetchingExtraExplorePosts());

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
		dispatch(fetchedExtraExplorePosts(contents));

		dispatch(setExplorePostsNextAPIEndpoint(next));

		dispatch(endFetchingExtraExplorePosts());
	}
};
