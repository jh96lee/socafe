import axios from "axios";

import { fetchToken } from "../../utils/cookie";

export const startFetchingHomeFeedPost = () => ({
	type: "START_FETCHING_HOME_FEED_POSTS",
});

export const startFetchingExtraHomeFeedPost = () => ({
	type: "START_FETCHING_EXTRA_HOME_FEED_POSTS",
});

export const fetchedHomeFeedPosts = (posts) => ({
	type: "FETCHED_HOME_FEED_POSTS",
	payload: posts,
});

export const fetchedExtraHomeFeedPosts = (posts) => ({
	type: "FETCHED_EXTRA_HOME_FEED_POSTS",
	payload: posts,
});

export const endFetchingHomeFeedPost = () => ({
	type: "END_FETCHING_HOME_FEED_POSTS",
});

export const endFetchingExtraHomeFeedPost = () => ({
	type: "END_FETCHING_EXTRA_HOME_FEED_POSTS",
});

export const incrementHomeFeedCurrentPage = () => ({
	type: "INCREMENT_HOME_FEED_CURRENT_PAGE",
});

// REVIEW: contentType can either be "initial" or "extra"
export const fetchHomeFeedPosts =
	(userID, contentType) => async (dispatch, getState) => {
		contentType === "initial"
			? dispatch(startFetchingHomeFeedPost())
			: dispatch(startFetchingExtraHomeFeedPost());

		contentType === "extra" && dispatch(incrementHomeFeedCurrentPage());

		const { homeFeedCurrentPage, homeFeedPageSize } =
			getState().homeFeedReducer;

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/posts/home?userID=${userID}&page=${homeFeedCurrentPage}&pageSize=${homeFeedPageSize}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		contentType === "initial"
			? dispatch(fetchedHomeFeedPosts(data))
			: dispatch(fetchedExtraHomeFeedPosts(data));

		contentType === "initial"
			? dispatch(endFetchingHomeFeedPost())
			: dispatch(endFetchingExtraHomeFeedPost());
	};
