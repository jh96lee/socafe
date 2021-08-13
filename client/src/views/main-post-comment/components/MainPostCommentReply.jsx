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
