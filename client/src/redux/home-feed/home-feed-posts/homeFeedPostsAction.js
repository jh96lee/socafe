import axios from "axios";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const startFetchingHomeFeedPosts = () => ({
	type: "START_FETCHING_HOME_FEED_POSTS",
});

const fetchedHomeFeedPosts = (homeFeedPosts) => ({
	type: "FETCHED_HOME_FEED_POSTS",
	payload: homeFeedPosts,
});

const endFetchingHomeFeedPosts = () => ({
	type: "END_FETCHING_HOME_FEED_POSTS",
});

export const fetchHomeFeedPosts = () => async (dispatch) => {
	dispatch(startFetchingHomeFeedPosts());

	try {
		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/post/feed",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, home_feed_posts } = data;

		if (error) {
			dispatch(endFetchingHomeFeedPosts());
		} else if (home_feed_posts) {
			dispatch(fetchedHomeFeedPosts(home_feed_posts));

			dispatch(endFetchingHomeFeedPosts());
		}
	} catch (error) {
		dispatch(endFetchingHomeFeedPosts());
	}
};
