import axios from "axios";

import { fetchToken } from "../../utils/cookie";

export const startFetchingHomeFeedPost = () => ({
	type: "START_FETCHING_HOME_FEED_POSTS",
});

export const fetchedHomeFeedPosts = (posts) => ({
	type: "FETCHED_HOME_FEED_POSTS",
	payload: posts,
});

export const endFetchingHomeFeedPost = () => ({
	type: "END_FETCHING_HOME_FEED_POSTS",
});

export const fetchHomeFeedPosts = (userID) => async (dispatch) => {
	dispatch(startFetchingHomeFeedPost());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/posts/home?userID=${userID ? userID : 0}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	dispatch(fetchedHomeFeedPosts(data));

	dispatch(endFetchingHomeFeedPost());
};
