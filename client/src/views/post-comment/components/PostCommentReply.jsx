import * as React from "react";
import { useDispatch } from "react-redux";

import {
	setParentCommentID,
	setRepliedCommentID,
	setRepliedCommentUsername,
} from "../../../redux/post-comment/post-comment-input/postCommentInputAction";

import { PostCommentReplyStyle } from "../styles/PostCommentReplyStyle";

const PostCommentReply = ({ commentID, parentCommentID, username }) => {
	const dispatch = useDispatch();

	const handlePostCommentReplyOnClick = () => {
		// REVIEW: if the replying comment's parentCommentID is null, that means the comment that the user is trying to reply
		// REVIEW: to is a parent comment, therefore, the reply comment's parent comment ID
		// REVIEW: should be the ID of the parent comment that has just been clicked
		const commentParentID =
			parentCommentID === null ? commentID : parentCommentID;

		dispatch(setParentCommentID(commentParentID));

		dispatch(setRepliedCommentID(commentID));

		dispatch(setRepliedCommentUsername(username));
	};

	return (
		<PostCommentReplyStyle onClick={handlePostCommentReplyOnClick}>
			Reply
		</PostCommentReplyStyle>
	);
};

export default PostCommentReply;
