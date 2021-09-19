const initialState = {
	postID: null,
	// REVIEW: inserted comment
	uploadedPostComment: null,
	parentCommentID: null,
	repliedCommentID: null,
	// REVIEW: used for appending username to contenteditable
	repliedCommentUsername: null,
	isPostCommentUploading: false,
};

const postCommentInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_UPLOADING_POST_COMMENT":
			return {
				...state,
				isPostCommentUploading: true,
			};
		case "UPLOADED_POST_COMMENT":
			return {
				...state,
				uploadedPostComment: action.payload,
			};
		case "END_UPLOADING_POST_COMMENT":
			return {
				...state,
				isPostCommentUploading: false,
			};
		case "SET_POST_ID":
			return {
				...state,
				postID: action.payload,
			};
		case "SET_PARENT_COMMENT_ID":
			return {
				...state,
				parentCommentID: action.payload,
			};
		case "SET_REPLIED_COMMENT_ID":
			return {
				...state,
				repliedCommentID: action.payload,
			};
		case "SET_REPLIED_COMMENT_USERNAME":
			return {
				...state,
				repliedCommentUsername: action.payload,
			};
		case "RESET_POST_COMMENT_INPUT":
			return {
				...state,
				uploadedPostComment: null,
				parentCommentID: null,
				repliedCommentID: null,
				repliedCommentUsername: null,
				isPostCommentUploading: false,
			};
		default:
			return state;
	}
};

export default postCommentInputReducer;
