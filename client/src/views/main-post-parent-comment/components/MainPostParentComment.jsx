import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { MainPostComment } from "../../main-post-comment";
import MainPostCommentReplies from "./MainPostCommentReplies";

import {
	MainPostParentCommentStyle,
	MainPostCommentViewRepliesStyle,
} from "../styles/MainPostParentCommentStyle";

import styled from "styled-components";

import { Up, Down } from "../../../assets";

const MainPostParentCommentViewRepliesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > p {
		font-size: 1.2rem;
		color: var(--text-1);
	}

	& > svg {
		fill: grey;
		width: 1rem;
		height: 1rem;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > span {
		text-decoration: underline;
	}
`;

const MainPostParentComment = ({ comment }) => {
	const { id, comment_total_replies } = comment;

	const [isRepliesOpen, setIsRepliesOpen] = React.useState(false);

	const handleViewRepliesOnClick = () => {
		setIsRepliesOpen((prevState) => !prevState);
	};

	return (
		<MainPostParentCommentStyle>
			<MainPostComment comment={comment} />

			{comment_total_replies !== 0 && (
				<MainPostParentCommentViewRepliesStyle
					onClick={handleViewRepliesOnClick}
				>
					<span>
						{isRepliesOpen
							? "Hide"
							: `View more replies (${comment_total_replies})`}
					</span>

					{isRepliesOpen ? <Up /> : <Down />}
				</MainPostParentCommentViewRepliesStyle>
			)}

			{isRepliesOpen && <MainPostCommentReplies commentID={id} />}
		</MainPostParentCommentStyle>
	);
};

export default MainPostParentComment;
