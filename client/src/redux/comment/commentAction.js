export const setCommentContent = (content) => ({
	type: "SET_COMMENT_CONTENT",
	payload: content,
});

export const addUserOnComment = (user) => ({
	type: "ADD_USER_ON_COMMENT",
	payload: user,
});

export const removeUserOnComment = (userID) => ({
	type: "REMOVE_USER_ON_COMMENT",
	payload: userID,
});

export const setCommentErrorMessage = (errorMessage) => ({
	type: "SET_COMMENT_ERROR_MESSAGE",
	payload: errorMessage,
});
