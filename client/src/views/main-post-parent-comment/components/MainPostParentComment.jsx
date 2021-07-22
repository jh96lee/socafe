import * as React from "react";
import styled from "styled-components";

import MainPostCommentReplies from "./MainPostCommentReplies";
import MainPostComment from "./MainPostComment";
import { Avatar } from "../../shared";

const MainPostParentCommentStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > *:first-child {
		width: 100%;
	}

	& > *:not(:first-child) {
		width: 75%;
		margin: auto;
	}
`;

const MainPostParentComment = ({ parentComment }) => {
	return (
		<MainPostParentCommentStyle>
			<MainPostComment comment={parentComment} />

			{/* <p>View Replies</p>

			<MainPostCommentReplies /> */}
		</MainPostParentCommentStyle>
	);
};

export default MainPostParentComment;
