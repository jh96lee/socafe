const initialState = {
	mainPostID: null,
	mainPostComment: null,
	mainPostCommentParentCommentID: null,
	// REVIEW: use this data to figure out who will receive comment related notification
	// REVIEW: does not matter if the username is appended or the user manually removed the appended username,
	// REVIEW: notification that someone replied to his or her comment needs to be sent
	mainPostCommentRepliedCommentID: null,
	// REVIEW: this state is simply used for appending username to contenteditable
	mainPostCommentReplyingToUsername: null,
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
		case "SET_MAIN_POST_COMMENT_REPLYING_TO_USERNAME":
			return {
				...state,
				mainPostCommentReplyingToUsername: action.payload,
			};
		case "RESET_POSTED_MAIN_POST_COMMENT":
			return {
				...state,
				mainPostComment: null,
			};
		case "RESET_MAIN_POST_COMMENT":
			return {
				...state,
				mainPostComment: null,
				mainPostCommentParentCommentID: null,
				mainPostCommentRepliedCommentID: null,
				mainPostCommentReplyingToUsername: null,
			};
		default:
			return state;
	}
};

export default mainPostCommentInputReducer;
