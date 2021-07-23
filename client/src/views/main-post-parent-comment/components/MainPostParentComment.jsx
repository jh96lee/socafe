import * as React from "react";
import styled from "styled-components";
import axios from "axios";

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
		width: 87%;
		margin-left: auto;
	}
`;

const MainPostParentComment = ({ parentComment }) => {
	const [postCommentReplies, setPostCommentReplies] = React.useState([]);
	const [isPostCommentRepliesLoading, setIsPostCommentRepliesLoading] =
		React.useState(false);

	const { comment_id } = parentComment;

	const handleViewRepliesOnClick = async () => {
		setIsPostCommentRepliesLoading(true);

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/comment/reply/${comment_id}`,
		});

		setPostCommentReplies(data);

		setIsPostCommentRepliesLoading(false);
	};

	return (
		<MainPostParentCommentStyle>
			<MainPostComment comment={parentComment} />

			<p onClick={handleViewRepliesOnClick}>View Replies</p>

			<MainPostCommentReplies postCommentReplies={postCommentReplies} />
		</MainPostParentCommentStyle>
	);
};

export default MainPostParentComment;
