const initialState = {
	postID: null,
	isPostLiked: null,
	postTotalLikes: null,
	isPostBookmarked: null,
	postMetadata: {},
	isPostLoaded: false,
};

const mainPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_POST":
			return {
				...state,
				isPostLoaded: false,
			};
		case "FETCHED_POST":
			return {
				isPostLoaded: false,
				...action.payload,
			};
		case "END_FETCHING_POST":
			return {
				...state,
				isPostLoaded: true,
			};
		case "SET_IS_POST_LIKED":
			return {
				...state,
				isPostLiked: !state.isPostLiked,
			};
		case "SET_POST_TOTAL_LIKES":
			return {
				...state,
				postTotalLikes: action.payload,
			};
		case "SET_IS_POST_BOOKMARKED":
			return {
				...state,
				isPostBookmarked: !state.isPostBookmarked,
			};
		// REVIEW: when post component unmounts, we want to make sure to reset all data
		case "RESET_POST":
			return initialState;
		default:
			return state;
	}
};

export default mainPostReducer;
