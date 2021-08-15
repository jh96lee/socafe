const initialState = {
	mainPostID: null,
	mainPostComment: null,
	mainPostCommentParentCommentID: null,
	mainPostCommentRepliedCommentID: null,
	mainPostCommentRepliedCommentUsername: null,
	isMainPostCommentPosting: false,
};

const mainPostCommentInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_POSTING_MAIN_POST_COMMENT":
			return {
				...state,
				isMainPostCommentPosting: true,
			};
		case "POSTED_MAIN_POST_COMMENT":
			return {
				...state,
				mainPostComment: action.payload,
			};
		case "END_POSTING_MAIN_POST_COMMENT":
			return {
				...state,
				isMainPostCommentPosting: false,
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
				isMainPostCommentPosting: false,
			};
		default:
			return state;
	}
};

export default mainPostCommentInputReducer;
