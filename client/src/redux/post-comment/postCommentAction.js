const startSubmittingPostComment = () => ({
	type: "START_SUBMITTING_POST_COMMENT",
});

const endSubmittingPostComment = () => ({
	type: "END_SUBMITTING_POST_COMMENT",
});

export const setPostCommentPostID = (postID) => ({
	type: "SET_POST_COMMENT_POST_ID",
	payload: postID,
});

export const setPostCommentTaggedUser = (userObject) => ({
	type: "SET_POST_COMMENT_TAGGED_USER",
	payload: userObject,
});

export const addPostCommentUser = (userObject) => ({
	type: "ADD_POST_COMMENT_USER",
	payload: userObject,
});

export const removePostCommentUser = (userID) => ({
	type: "REMOVE_POST_COMMENT_USER",
	payload: userID,
});
