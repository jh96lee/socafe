const initialState = {
	isHomeFeedPostsLoading: false,
	isExtraHomeFeedPostsLoading: false,
	homeFeedCurrentPage: 1,
	homeFeedPageSize: 2,
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
		case "START_FETCHING_EXTRA_HOME_FEED_POSTS":
			return {
				...state,
				isExtraHomeFeedPostsLoading: true,
			};
		case "FETCHED_EXTRA_HOME_FEED_POSTS":
			return {
				...state,
				homePosts: [...state.homePosts, ...action.payload],
			};
		case "END_FETCHING_EXTRA_HOME_FEED_POSTS":
			return {
				...state,
				isExtraHomeFeedPostsLoading: false,
			};
		case "INCREMENT_HOME_FEED_CURRENT_PAGE":
			return {
				...state,
				homeFeedCurrentPage: state.homeFeedCurrentPage + 1,
			};
		default:
			return state;
	}
};

export default homeFeedReducer;
