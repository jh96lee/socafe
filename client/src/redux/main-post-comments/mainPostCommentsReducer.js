const initialState = {
	currentPostCommentsPage: 1,
	isPostCommentsLoaded: false,
	isExtraPostCommentsLoading: false,
	postComments: [],
	postCommentsNextAPIEndpoint: "",
};

const mainPostCommentReducer = (state = initialState, action) => {
	switch (action.type) {
		// TODO
		case "SET_POST_COMMENTS_PAGE":
			return {
				...state,
				currentPostCommentsPage: state.currentPostCommentsPage + 1,
			};
		case "START_FETCHING_POST_COMMENTS":
			return {
				...state,
				isPostCommentsLoaded: false,
			};
		case "FETCHED_POST_COMMENTS":
			return {
				...state,
				postComments: action.payload,
			};
		case "END_FETCHING_POST_COMMENTS":
			return {
				...state,
				isPostCommentsLoaded: true,
			};
		case "START_FETCHING_EXTRA_POST_COMMENTS":
			return {
				...state,
				isExtraPostCommentsLoading: true,
			};
		case "FETCHED_EXTRA_POST_COMMENTS":
			return {
				...state,
				postComments: [...state.postComments, ...action.payload],
			};
		case "END_FETCHING_EXTRA_POST_COMMENTS":
			return {
				...state,
				isExtraPostCommentsLoading: false,
			};
		case "SET_POST_COMMENTS_NEXT_API_ENDPOINT":
			return {
				...state,
				postCommentsNextAPIEndpoint: action.payload,
			};
		case "ADD_NEW_POST_COMMENT":
			return {
				...state,
				postComments: [action.payload, ...state.postComments],
			};
		case "REMOVE_POST_COMMENT":
			return {
				...state,
				postComments: state.postComments.filter(
					(comment) => comment.id !== action.payload
				),
			};
		case "RESET_POST_COMMENTS":
			return initialState;
		default:
			return state;
	}
};

export default mainPostCommentReducer;
