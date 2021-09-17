const initialState = {
	mainPostID: null,
	isMainPostLiked: null,
	mainPostTotalLikes: null,
	isMainPostBookmarked: null,
	mainPost: {},
	isMainPostLoaded: false,
};

const mainPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_MAIN_POST":
			return {
				...state,
				isMainPostLoaded: false,
			};
		case "FETCHED_MAIN_POST":
			return {
				isMainPostLoaded: false,
				...action.payload,
			};
		case "END_FETCHING_MAIN_POST":
			return {
				...state,
				isMainPostLoaded: true,
			};
		case "SET_IS_MAIN_POST_LIKED":
			return {
				...state,
				isMainPostLiked: !state.isMainPostLiked,
			};
		case "SET_MAIN_POST_TOTAL_LIKES":
			return {
				...state,
				mainPostTotalLikes: action.payload,
			};
		case "SET_IS_MAIN_POST_BOOKMARKED":
			return {
				...state,
				isMainPostBookmarked: !state.isMainPostBookmarked,
			};
		case "RESET_MAIN_POST":
			return initialState;
		default:
			return state;
	}
};

export default mainPostReducer;
