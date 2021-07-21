import * as React from "react";
import styled from "styled-components";

import { IconElement } from "../../shared";
import MainPostCommentInput from "./MainPostCommentInput";

import { CloseAlt } from "../../../assets";

const MainPostCommentsStyle = styled.div`
	position: sticky;
	top: 0;
	right: 0;
	z-index: 10;
	display: ${(props) => (props.isPostCommentsOpen ? "grid" : "none")};
	grid-auto-rows: 1fr;
	background-color: var(--bg-1);
	box-shadow: -1.6px 0 0 0 var(--input-default-separator-color);
`;

export const MainPostCommentsHeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.6rem;
	box-shadow: 0 1.6px 0 0 var(--input-default-separator-color);

	& > h5 {
		font-weight: 600;
		color: var(--text-1);
	}
`;

export const MainPostUsersCommentsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 2.2rem 1.5rem;
	max-height: 100%;
`;

export const MainPostCommentInputStyle = styled.div`
	padding: 1.3rem;
	box-shadow: 0 -1.6px 0 0 var(--input-default-separator-color);
`;

const MainPostComments = ({
	isPostCommentsOpen,
	handleClosePostCommentsOnClick,
}) => {
	return (
		<MainPostCommentsStyle isPostCommentsOpen={isPostCommentsOpen}>
			{/* <MainPostCommentsHeaderStyle>
				<h5>Comments</h5>

				<IconElement
					onClick={handleClosePostCommentsOnClick}
					iconID="post-preview-comments__close-alt"
					iconRole="button"
					iconElementStyleObject={{
						iconSize: "1.2rem",
					}}
				>
					<CloseAlt />
				</IconElement>
			</MainPostCommentsHeaderStyle>

			<MainPostUsersCommentsStyle>
				<p>Comment 1</p>

				<p>Comment 2</p>

				<p>Comment 3</p>
			</MainPostUsersCommentsStyle> */}

			<MainPostCommentInputStyle>
				<MainPostCommentInput />
			</MainPostCommentInputStyle>
		</MainPostCommentsStyle>
	);
};

export default MainPostComments;
