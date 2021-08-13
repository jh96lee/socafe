const initialState = {
	postComments: [],
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
		default:
			return state;
	}
};

export default mainPostCommentReducer;
