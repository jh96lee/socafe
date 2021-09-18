import axios from "axios";

import { insertCommentNotifications } from "../../notifications/comment-notifications/commentNotificationsAction";

import { fetchToken } from "../../../utils";

const startUploadingPostComment = () => ({
	type: "START_UPLOADING_POST_COMMENT",
});

const uploadedPostComment = (commentObject) => ({
	type: "UPLOADED_POST_COMMENT",
	payload: commentObject,
});

const endUploadingPostComment = () => ({
	type: "END_UPLOADING_POST_COMMENT",
});

export const setPostID = (postID) => ({
	type: "SET_POST_ID",
	payload: postID,
});

export const setParentCommentID = (parentCommentID) => ({
	type: "SET_PARENT_COMMENT_ID",
	payload: parentCommentID,
});

export const setRepliedCommentID = (repliedCommentID) => ({
	type: "SET_REPLIED_COMMENT_ID",
	payload: repliedCommentID,
});

export const setRepliedCommentUsername = (username) => ({
	type: "SET_REPLIED_COMMENT_USERNAME",
	payload: username,
});

// TODO: used for resetting main post comment once it has been added to my parent comments section
export const resetPostCommentInput = () => ({
	type: "RESET_POST_COMMENT_INPUT",
});

export const uploadPostComment =
	(contentEditableChildNodesArray) => async (dispatch, getState) => {
		dispatch(startUploadingPostComment());

		const commentNodesArray = contentEditableChildNodesArray.map((node) => {
			return {
				nodeType: node.nodeName,
				nodeValue: node.textContent,
				mentionType:
					node.nodeName === "SPAN" ? null : node.dataset.commentMentionType,
			};
		});

		const token = fetchToken();

		const { postID, parentCommentID, repliedCommentID } =
			getState().mainPostCommentInputReducer;

		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/comment/insert",
			data: {
				postID,
				parentCommentID,
				repliedCommentID,
				commentNodesArray,
			},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const {
			error,
			id,
			created_at,
			comment_user,
			comment_is_liked,
			comment_total_likes,
			comment_total_replies,
			comment_nodes_array,
			post_id,
			parent_comment_id,
			replied_comment_id,
		} = data;

		if (!error) {
			dispatch(
				uploadedPostComment({
					id,
					created_at,
					comment_user,
					comment_is_liked,
					comment_total_likes,
					comment_total_replies,
					comment_nodes_array,
					post_id,
					parent_comment_id,
					replied_comment_id,
				})
			);

			dispatch(endUploadingPostComment());

			dispatch(
				insertCommentNotifications(
					id,
					post_id,
					parent_comment_id,
					replied_comment_id,
					comment_nodes_array
				)
			);
		}
	};
