import * as React from "react";
import { useDispatch } from "react-redux";

import {
	setMainPostCommentParentCommentID,
	setMainPostCommentRepliedCommentID,
	setMainPostCommentRepliedCommentUsername,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { MainPostCommentReplyStyle } from "../styles/MainPostCommentReplyStyle";

const MainPostCommentReply = ({ commentID, parentCommentID, username }) => {
	const dispatch = useDispatch();

	const handlePostCommentReplyOnClick = () => {
		// REVIEW: if the replying comment's parentCommentID is null, that means the comment that the user is trying to reply
		// REVIEW: to is a parent comment, therefore, the reply comment's parent comment ID
		// REVIEW: should be the ID of the parent comment that has just been clicked
		const commentParentID =
			parentCommentID === null ? commentID : parentCommentID;

		dispatch(setMainPostCommentParentCommentID(commentParentID));

		dispatch(setMainPostCommentRepliedCommentID(commentID));

		dispatch(setMainPostCommentRepliedCommentUsername(username));
	};

	return (
		<MainPostCommentReplyStyle onClick={handlePostCommentReplyOnClick}>
			Reply
		</MainPostCommentReplyStyle>
	);
};

export default MainPostCommentReply;
