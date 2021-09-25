import axios from "axios";

import { fetchToken } from "../../../utils";

const startFetchingHomeFeedPosts = () => ({
	type: "START_FETCHING_HOME_FEED_POSTS",
});

export const fetchedHomeFeedPosts = (homeFeedPosts) => ({
	type: "FETCHED_HOME_FEED_POSTS",
	payload: homeFeedPosts,
});

const endFetchingHomeFeedPosts = () => ({
	type: "END_FETCHING_HOME_FEED_POSTS",
});

const startFetchingExtraHomeFeedPosts = () => ({
	type: "START_FETCHING_EXTRA_HOME_FEED_POSTS",
});

export const fetchedExtraHomeFeedPosts = (extraHomeFeedPosts) => ({
	type: "FETCHED_EXTRA_HOME_FEED_POSTS",
	payload: extraHomeFeedPosts,
});

const endFetchingExtraHomeFeedPosts = () => ({
	type: "END_FETCHING_EXTRA_HOME_FEED_POSTS",
});

const setHomeFeedPostsNextAPIEndpoint = (apiEndpoint) => ({
	type: "SET_HOME_FEED_POSTS_NEXT_API_ENDPOINT",
	payload: apiEndpoint,
});

export const setHomeFeedPostsPage = () => ({
	type: "SET_HOME_FEED_POSTS_PAGE",
});

export const resetHomeFeedPosts = () => ({
	type: "RESET_HOME_FEED_POSTS",
});

export const fetchHomeFeedPosts =
	(pageSize, customQueryString = "") =>
	async (dispatch) => {
		dispatch(startFetchingHomeFeedPosts());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/post/feed?page=1&size=${pageSize}&${customQueryString}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, contents, next } = data;

		if (!error) {
			dispatch(fetchedHomeFeedPosts(contents));

			dispatch(setHomeFeedPostsNextAPIEndpoint(next));

			dispatch(endFetchingHomeFeedPosts());
		}
	};

export const fetchExtraHomeFeedPosts =
	(nextAPIEndpoint) => async (dispatch) => {
		dispatch(startFetchingExtraHomeFeedPosts());

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
			dispatch(fetchedExtraHomeFeedPosts(contents));

			dispatch(setHomeFeedPostsNextAPIEndpoint(next));

			dispatch(endFetchingExtraHomeFeedPosts());
		}
	};
