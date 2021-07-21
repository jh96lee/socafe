import { filterArrayByID } from "../utils/common/filterArrayByID";
import { appendElementToPreviousArray } from "../utils/common/appendElementToPreviousArray";

const initialState = {
	postCommentPostID: null,
	isPostCommentSubmitting: false,
	postCommentTaggedUser: null,
	postCommentTaggedUsersArray: [],
	postCommentErrorMessage: null,
};

const PostCommentReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_SUBMITTING_POST_COMMENT":
			return {
				...state,
				isPostCommentSubmitting: true,
			};
		case "END_SUBMITTING_POST_COMMENT":
			return {
				...state,
				isPostCommentSubmitting: false,
			};
		case "SET_POST_COMMENT_POST_ID":
			return {
				...state,
				postCommentPostID: action.payload,
			};
		case "SET_POST_COMMENT_TAGGED_USER":
			return {
				...state,
				postCommentTaggedUser: action.payload,
			};
		case "ADD_POST_COMMENT_USER":
			return {
				...state,
				postCommentTaggedUsersArray: appendElementToPreviousArray(
					state.postCommentTaggedUsersArray,
					action.payload
				),
			};
		case "REMOVE_POST_COMMENT_USER":
			return {
				...state,
				postCommentTaggedUsersArray: filterArrayByID(
					state.postCommentTaggedUsersArray,
					action.payload
				),
			};
		default:
			return state;
	}
};

export default PostCommentReducer;
