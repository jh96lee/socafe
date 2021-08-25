export const setNotiPostID = (postID) => ({
	type: "SET_NOTI_POST_ID",
	payload: postID,
});

export const setNotiInstigatedCommentID = (commentID) => ({
	type: "SET_NOTI_INSTIGATED_COMMENT_ID",
	payload: commentID,
});

export const setNotiReceivedCommentID = (commentID) => ({
	type: "SET_NOTI_RECEIVED_COMMENT_ID",
	payload: commentID,
});
