const initialState = {
	postComments: [],
	postCommentsNextAPIEndpoint: "",
};

const mainPostCommentReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCHED_POST_COMMENTS":
			return {
				...state,
				postComments: action.payload,
			};
		case "FETCHED_EXTRA_POST_COMMENTS":
			return {
				...state,
				postComments: [...state.postComments, ...action.payload],
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
		case "SET_POST_COMMENTS_NEXT_API_ENDPOINT":
			return {
				...state,
				postCommentsNextAPIEndpoint: action.payload,
			};
		case "RESET_POST_COMMENTS":
			return initialState;
		default:
			return state;
	}
};

export default mainPostCommentReducer;
