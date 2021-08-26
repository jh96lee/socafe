import axios from "axios";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const setCommentNotificationsSuccessMessage = (successMessage) => ({
	type: "SET_COMMENT_NOTIFICATIONS_SUCCESS_MESSAGE",
	payload: successMessage,
});

const setCommentNotificationsErrorMessage = (errorMessage) => ({
	type: "SET_COMMENT_NOTIFICATIONS_ERROR_MESSAGE",
	payload: errorMessage,
});

export const postCommentNotifications =
	(commentID, postID, parentCommentID, repliedCommentID, commentNodesArray) =>
	async (dispatch) => {
		const token = fetchToken();

		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/notification/comment",
			data: {
				mainCommentID: commentID,
				mainPostID: postID,
				mainPostCommentParentCommentID: parentCommentID,
				mainPostCommentRepliedCommentID: repliedCommentID,
				mainPostCommentNodesArray: commentNodesArray,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { success, error } = data;

		if (success) {
			dispatch(setCommentNotificationsSuccessMessage(success));
		} else if (error) {
			dispatch(setCommentNotificationsErrorMessage(error));
		}
	};
