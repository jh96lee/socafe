import * as React from "react";

import MainPostComment from "./MainPostComment";

import { MainPostCommentRepliesStyle } from "../styles/MainPostCommentRepliesStyle";

const MainPostCommentReplies = ({
	postCommentReplies,
	replyParentCommentID,
}) => {
	return (
		<MainPostCommentRepliesStyle>
			{postCommentReplies.map((reply) => {
				return (
					<MainPostComment
						key={reply.comment_id}
						comment={reply}
						replyParentCommentID={replyParentCommentID}
					/>
				);
			})}
		</MainPostCommentRepliesStyle>
	);
};

export default MainPostCommentReplies;
