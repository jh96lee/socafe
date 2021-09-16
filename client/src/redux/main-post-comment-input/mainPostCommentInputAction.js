import axios from "axios";

import { insertCommentNotifications } from "../notifications/comment-notifications/commentNotificationsAction";

import { fetchToken } from "../../utils/cookie/fetchToken";

const startInsertingMainPostComment = () => ({
	type: "START_INSERTING_MAIN_POST_COMMENT",
});

const insertedMainPostComment = (commentObject) => ({
	type: "INSERTED_MAIN_POST_COMMENT",
	payload: commentObject,
});

const endInsertingMainPostComment = () => ({
	type: "END_INSERTING_MAIN_POST_COMMENT",
});

export const setMainPostID = (postID) => ({
	type: "SET_MAIN_POST_ID",
	payload: postID,
});

export const setMainPostCommentParentCommentID = (parentCommentID) => ({
	type: "SET_MAIN_POST_COMMENT_PARENT_COMMENT_ID",
	payload: parentCommentID,
});

export const setMainPostCommentRepliedCommentID = (repliedCommentID) => ({
	type: "SET_MAIN_POST_COMMENT_REPLIED_COMMENT_ID",
	payload: repliedCommentID,
});

export const setMainPostCommentRepliedCommentUsername = (
	replyingToUsername
) => ({
	type: "SET_MAIN_POST_COMMENT_REPLIED_COMMENT_USERNAME",
	payload: replyingToUsername,
});

// TODO: used for resetting main post comment once it has been added to my parent comments section
export const resetMainPostComment = () => ({
	type: "RESET_MAIN_POST_COMMENT",
});

export const postMainPostComment =
	(contentEditableChildNodesArray) => async (dispatch, getState) => {
		dispatch(startInsertingMainPostComment());

		const mainPostCommentNodesArray = contentEditableChildNodesArray.map(
			(node) => {
				return {
					nodeType: node.nodeName,
					nodeValue: node.textContent,
					mentionType:
						node.nodeName === "SPAN" ? null : node.dataset.commentMentionType,
				};
			}
		);

		const token = fetchToken();

		try {
			const {
				mainPostID,
				mainPostCommentParentCommentID,
				mainPostCommentRepliedCommentID,
			} = getState().mainPostCommentInputReducer;

			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/comment/insert",
				data: {
					mainPostID,
					mainPostCommentParentCommentID,
					mainPostCommentRepliedCommentID,
					mainPostCommentNodesArray,
				},
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const {
				success,
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

			console.log(data);

			if (error) {
				dispatch(endInsertingMainPostComment());
			} else if (success) {
				dispatch(
					insertedMainPostComment({
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

				dispatch(endInsertingMainPostComment());

				dispatch(
					insertCommentNotifications(
						id,
						post_id,
						parent_comment_id,
						mainPostCommentRepliedCommentID,
						comment_nodes_array
					)
				);
			}
		} catch (error) {
			dispatch(endInsertingMainPostComment());
		}
	};
