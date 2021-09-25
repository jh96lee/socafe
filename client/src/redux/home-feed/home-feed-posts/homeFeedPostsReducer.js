const initialState = {
	currentHomeFeedPostsPage: 1,
	isHomeFeedPostsLoaded: false,
	isExtraHomeFeedPostsLoading: false,
	homeFeedPosts: [],
	homeFeedPostsNextAPIEndpoint: "",
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
		case "START_FETCHING_EXTRA_HOME_FEED_POSTS":
			return {
				...state,
				isExtraHomeFeedPostsLoading: true,
			};
		case "FETCHED_EXTRA_HOME_FEED_POSTS":
			return {
				...state,
				homeFeedPosts: [...state.homeFeedPosts, ...action.payload],
			};
		case "END_FETCHING_EXTRA_HOME_FEED_POSTS":
			return {
				...state,
				isExtraHomeFeedPostsLoading: false,
			};
		case "SET_HOME_FEED_POSTS_PAGE":
			return {
				...state,
				currentHomeFeedPostsPage: state.currentHomeFeedPostsPage + 1,
			};
		case "SET_HOME_FEED_POSTS_NEXT_API_ENDPOINT":
			return {
				...state,
				homeFeedPostsNextAPIEndpoint: action.payload,
			};
		case "RESET_HOME_FEED_POSTS":
			return initialState;
		default:
			return state;
	}
};

export default homeFeedPostsReducer;
