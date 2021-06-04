const initialState = {
	commentContent: "",
	taggedCommentUsersArray: [],
	commentErrorMessage: null,
};

const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_COMMENT_CONTENT":
			return {
				...state,
				commentErrorMessage: null,
				commentContent: action.payload,
			};
		case "ADD_USER_ON_COMMENT":
			return {
				...state,
				taggedCommentUsersArray: [
					...state.taggedCommentUsersArray,
					action.payload,
				],
			};
		case "REMOVE_USER_ON_COMMENT":
			return {
				...state,
				commentErrorMessage: null,
				taggedCommentUsersArray: state.taggedCommentUsersArray.filter(
					(user) => {
						return user.id !== action.payload;
					}
				),
			};
		case "SET_COMMENT_ERROR_MESSAGE":
			return {
				...state,
				commentErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default commentReducer;
