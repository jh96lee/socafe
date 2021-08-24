export const fetchedPostComments = (postComments) => ({
	type: "FETCHED_POST_COMMENTS",
	payload: postComments,
});

export const fetchedExtraPostComments = (extraPostComments) => ({
	type: "FETCHED_EXTRA_POST_COMMENTS",
	payload: extraPostComments,
});

export const addNewPostComment = (newComment) => ({
	type: "ADD_NEW_POST_COMMENT",
	payload: newComment,
});

export const removePostComment = (commentID) => ({
	type: "REMOVE_POST_COMMENT",
	payload: commentID,
});

export const setPostCommentsNextAPIEndpoint = (nextApiEndpoint) => ({
	type: "SET_POST_COMMENTS_NEXT_API_ENDPOINT",
	payload: nextApiEndpoint,
});

export const resetPostcomments = () => ({
	type: "RESET_POST_COMMENTS",
});
