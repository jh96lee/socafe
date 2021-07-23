import axios from "axios";

import { fetchToken } from "../../utils/cookie/fetchToken";

const startSubmittingMainPostComment = () => ({
	type: "START_SUBMITTING_MAIN_POST_COMMENT",
});

const submittedMainPostComment = (commentObject) => ({
	type: "SUBMITTED_MAIN_POST_COMMENT",
	payload: commentObject,
});

const endSubmittingMainPostComment = () => ({
	type: "END_SUBMITTING_MAIN_POST_COMMENT",
});

export const setMainPostID = (postID) => ({
	type: "SET_MAIN_POST_ID",
	payload: postID,
});

export const setMainPostCommentParentCommentID = (parentCommentID) => ({
	type: "SET_MAIN_POST_COMMENT_PARENT_COMMENT_ID",
	payload: parentCommentID,
});

export const setMainPostCommentRepliedCommentOwnerID = (
	repliedCommentOwnerID
) => ({
	type: "SET_MAIN_POST_COMMENT_REPLIED_COMMENT_OWNER_ID",
	payload: repliedCommentOwnerID,
});

// TODO: fix
export const setMainPostCommentRepliedCommentOwnerUsername = (
	repliedCommentOwnerUsername
) => ({
	type: "SET_MAIN_POST_COMMENT_REPLIED_COMMENT_OWNER_USERNAME",
	payload: repliedCommentOwnerUsername,
});

export const resetSubmittedMainPostComment = () => ({
	type: "RESET_SUBMITTED_MAIN_POST_COMMENT",
});

export const submitMainPostComment =
	(contentEditableChildNodesArray) => async (dispatch, getState) => {
		dispatch(startSubmittingMainPostComment());

		const commentNodesArray = contentEditableChildNodesArray.map((node) => {
			return {
				nodeType: node.nodeName,
				nodeValue: node.textContent,
			};
		});

		const token = fetchToken();

		try {
			const {
				mainPostID,
				mainPostCommentParentCommentID,
				mainPostCommentRepliedCommentOwnerID,
			} = getState().mainPostCommentInputReducer;

			console.log("TRIGGER");

			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/upload/post/comment",
				data: {
					postID: mainPostID,
					parentCommentID: mainPostCommentParentCommentID,
					repliedCommentOwnerID: mainPostCommentRepliedCommentOwnerID,
					commentNodesArray,
				},
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const {
				error,
				success,
				user_id,
				username,
				avatar_url,
				comment_id,
				post_id,
				parent_comment_id,
				replied_comment_owner_username,
				post_comment_child_nodes_array,
			} = data;

			if (error) {
				dispatch(endSubmittingMainPostComment());
			} else if (success) {
				dispatch(
					submittedMainPostComment({
						user_id,
						username,
						avatar_url,
						comment_id,
						post_id,
						parent_comment_id,
						replied_comment_owner_username,
						post_comment_child_nodes_array,
					})
				);

				dispatch(endSubmittingMainPostComment());
			}
		} catch (error) {
			dispatch(endSubmittingMainPostComment());
		}
	};
