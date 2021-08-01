const initialState = {
	homeFeedPosts: [],
	isHomeFeedPostsLoaded: false,
	isHomeFeedsLoadingMore: false,
	homeFeedPostsCurrentPage: 1,
	homeFeedPostsPageSize: 3,
};

const homeFeedPostsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_HOME_FEED_POSTS":
			return {
				...state,
				isHomeFeedPostsLoaded: false,
			};
		case "FETCHED_HOME_FEED_POSTS":
			return {
				...state,
				homeFeedPosts: action.payload,
			};
		case "END_FETCHING_HOME_FEED_POSTS":
			return {
				...state,
				isHomeFeedPostsLoaded: true,
			};
		default:
			return state;
	}
};

export default homeFeedPostsReducer;
