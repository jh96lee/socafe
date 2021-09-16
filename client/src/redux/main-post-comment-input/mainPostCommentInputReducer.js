const initialState = {
	mainPostID: null,
	// REVIEW: inserted comment
	mainPostComment: null,
	mainPostCommentParentCommentID: null,
	mainPostCommentRepliedCommentID: null,
	// REVIEW: used for appending username to contenteditable
	mainPostCommentRepliedCommentUsername: null,
	isMainPostCommentInserting: false,
};

const mainPostCommentInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_INSERTING_MAIN_POST_COMMENT":
			return {
				...state,
				isMainPostCommentInserting: true,
			};
		case "INSERTED_MAIN_POST_COMMENT":
			return {
				...state,
				mainPostComment: action.payload,
			};
		case "END_INSERTING_MAIN_POST_COMMENT":
			return {
				...state,
				isMainPostCommentInserting: false,
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
		case "SET_MAIN_POST_COMMENT_REPLIED_COMMENT_ID":
			return {
				...state,
				mainPostCommentRepliedCommentID: action.payload,
			};
		case "SET_MAIN_POST_COMMENT_REPLIED_COMMENT_USERNAME":
			return {
				...state,
				mainPostCommentRepliedCommentUsername: action.payload,
			};
		case "RESET_MAIN_POST_COMMENT":
			return {
				...state,
				mainPostComment: null,
				mainPostCommentParentCommentID: null,
				mainPostCommentRepliedCommentID: null,
				mainPostCommentRepliedCommentUsername: null,
				isMainPostCommentInserting: false,
			};
		default:
			return state;
	}
};

export default mainPostCommentInputReducer;
