const initialState = {
	isHomeFeedPostsLoading: false,
	homePosts: [],
};

const homeFeedReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_HOME_FEED_POSTS":
			return {
				...state,
				isHomeFeedPostsLoading: true,
			};
		case "FETCHED_HOME_FEED_POSTS":
			return {
				...state,
				homePosts: action.payload,
			};
		case "END_FETCHING_HOME_FEED_POSTS":
			return {
				...state,
				isHomeFeedPostsLoading: false,
			};
		default:
			return state;
	}
};

export default homeFeedReducer;
