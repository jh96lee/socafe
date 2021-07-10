const initialState = {
	postID: null,
	post: {},
	postTotalLikes: null,
	isPostLiked: null,
	isPostLoaded: false,
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_POST":
			return {
				...state,
				isPostLoaded: false,
			};
		case "FETCHED_POST":
			return {
				...state,
				post: action.payload,
			};
		case "END_FETCHING_POST":
			return {
				...state,
				isPostLoaded: true,
			};
		case "SET_POST_ID":
			return {
				...state,
				postID: action.payload,
			};
		case "SET_IS_POST_LIKED":
			return {
				...state,
				isPostLiked: action.payload,
			};
		case "SET_POST_TOTAL_LIKES":
			return {
				...state,
				postTotalLikes: action.payload,
			};
		case "SET_POST_LIKE":
			return {
				...state,
				isPostLiked: !state.isPostModalLiked,
			};
		case "INCREMENT_POST_TOTAL_LIKES":
			return {
				...state,
				postTotalLikes: state.postModalTotalLikes + 1,
			};
		case "DECREMENT_POST_TOTAL_LIKES":
			return {
				...state,
				postTotalLikes: state.postModalTotalLikes - 1,
			};
		case "RESET_POST":
			return initialState;
		default:
			return state;
	}
};

export default postReducer;
