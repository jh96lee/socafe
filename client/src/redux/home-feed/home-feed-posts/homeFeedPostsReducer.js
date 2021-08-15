const initialState = {
	homeFeedPosts: [],
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
		default:
			return state;
	}
};

export default homeFeedPostsReducer;
