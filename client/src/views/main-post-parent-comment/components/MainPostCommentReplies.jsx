import * as React from "react";
import styled from "styled-components";

import MainPostComment from "./MainPostComment";

const MainPostCommentRepliesStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	width: 100%;
`;

const MainPostCommentReplies = ({ postCommentReplies }) => {
	return (
		<MainPostCommentRepliesStyle>
			{postCommentReplies.map((reply, idx) => {
				return (
					<MainPostComment
						key={`main-post-comment__reply__${idx}`}
						comment={reply}
					/>
				);
			})}
		</MainPostCommentRepliesStyle>
	);
};

export default MainPostCommentReplies;
