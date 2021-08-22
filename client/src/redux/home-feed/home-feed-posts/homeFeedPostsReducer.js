const initialState = {
	homeFeedPosts: [],
	homeFeedPostsNextAPIEndpoint: "",
};

const homeFeedPostsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCHED_HOME_FEED_POSTS":
			return {
				...state,
				homeFeedPosts: action.payload,
			};
		case "FETCHED_EXTRA_HOME_FEED_POSTS":
			return {
				...state,
				homeFeedPosts: [...state.homeFeedPosts, ...action.payload],
			};
		case "SET_HOME_FEED_POSTS_NEXT_API_ENDPOINT":
			return {
				...state,
				homeFeedPostsNextAPIEndpoint: action.payload,
			};
		default:
			return state;
	}
};

export default homeFeedPostsReducer;
