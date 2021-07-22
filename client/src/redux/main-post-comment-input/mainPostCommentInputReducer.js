const initialState = {
	mainPostID: null,
	mainPostCommentParentCommentID: null,
	mainPostCommentRepliedCommentOwnerID: null,
	submittedMainPostComment: null,
	isMainPostCommentSubmitting: false,
};

const mainPostCommentInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_SUBMITTING_MAIN_POST_COMMENT":
			return {
				...state,
				isMainPostCommentSubmitting: true,
			};
		case "SUBMITTED_MAIN_POST_COMMENT":
			return {
				...state,
				submittedMainPostComment: action.payload,
			};
		case "END_SUBMITTING_MAIN_POST_COMMENT":
			return {
				...state,
				isMainPostCommentSubmitting: false,
			};
		case "SET_MAIN_POST_ID":
			return {
				...state,
				mainPostID: action.payload,
			};
		case "SET_MAIN_POST_COMMENT_PARENT_COMMENT_ID":
			return {
				...state,
				mainPostCommentParentCommentID: action.payload,
			};
		case "SET_MAIN_POST_COMMENT_REPLIED_COMMENT_OWNER_ID":
			return {
				...state,
				mainPostCommentRepliedCommentOwnerID: action.payload,
			};
		case "RESET_MAIN_POST_COMMENT":
			return state;
		default:
			return state;
	}
};

export default mainPostCommentInputReducer;
