export const fetchedHomeFeedPosts = (homeFeedPosts) => ({
	type: "FETCHED_HOME_FEED_POSTS",
	payload: homeFeedPosts,
});

export const fetchedExtraHomeFeedPosts = (extraHomeFeedPosts) => ({
	type: "FETCHED_EXTRA_HOME_FEED_POSTS",
	payload: extraHomeFeedPosts,
});

export const setHomeFeedPostsNextAPIEndpoint = (apiEndpoint) => ({
	type: "SET_HOME_FEED_POSTS_NEXT_API_ENDPOINT",
	payload: apiEndpoint,
});
