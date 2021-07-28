import axios from "axios";

import { fetchToken } from "../../utils/cookie/fetchToken";

const startPostingMainPostComment = () => ({
	type: "START_POSTING_MAIN_POST_COMMENT",
});

const postedMainPostComment = (commentObject) => ({
	type: "POSTED_MAIN_POST_COMMENT",
	payload: commentObject,
});

const endPostingMainPostComment = () => ({
	type: "END_POSTING_MAIN_POST_COMMENT",
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

export const setMainPostCommentReplyingToUsername = (replyingToUsername) => ({
	type: "SET_MAIN_POST_COMMENT_REPLYING_TO_USERNAME",
	payload: replyingToUsername,
});

export const resetPostedMainPostComment = () => ({
	type: "RESET_POSTED_MAIN_POST_COMMENT",
});

export const resetMainPostComment = () => ({
	type: "RESET_MAIN_POST_COMMENT",
});

export const postMainPostComment =
	(contentEditableChildNodesArray) => async (dispatch, getState) => {
		dispatch(startPostingMainPostComment());

		const mainPostCommentNodesArray = contentEditableChildNodesArray.map(
			(node) => {
				return {
					nodeType: node.nodeName,
					nodeValue: node.textContent,
					mentionType:
						node.nodeName === "SPAN"
							? null
							: node.dataset.commentMentionType
							? node.dataset.commentMentionType
							: "tag",
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
				url: "http://localhost:8080/upload/post/comment",
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
				comment_id,
				created_at,
				user_id,
				username,
				avatar_url,
				post_id,
				parent_comment_id,
				comment_nodes_array,
				comment_total_likes,
				comment_total_replies,
				comment_is_liked,
				success,
				error,
			} = data;

			if (error) {
				dispatch(endPostingMainPostComment());
			} else if (success) {
				dispatch(
					postedMainPostComment({
						comment_id,
						created_at,
						user_id,
						username,
						avatar_url,
						post_id,
						parent_comment_id,
						comment_nodes_array,
						comment_total_likes,
						comment_total_replies,
						comment_is_liked,
					})
				);

				dispatch(endPostingMainPostComment());
			}
		} catch (error) {
			dispatch(endPostingMainPostComment());
		}
	};
