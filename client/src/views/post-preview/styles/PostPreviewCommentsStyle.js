import styled from "styled-components";

export const PostPreviewCommentsStyle = styled.div`
	position: sticky;
	top: 0;
	right: 0;
	z-index: 10;
	display: ${(props) => (props.isPostCommentsOpen ? "grid" : "none")};
	grid-auto-rows: min-content auto min-content;
	background-color: var(--bg-1);
	height: 70rem;
	box-shadow: -1.6px 0 0 0 var(--input-default-separator-color);
`;

export const PostPreviewCommentsHeaderStyle = styled.div`
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

export const PostUserCommentsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 2.2rem 1.5rem;
	max-height: 100%;
`;

export const PostCommentInputStyle = styled.div`
	padding: 1.3rem;
	box-shadow: 0 -1.6px 0 0 var(--input-default-separator-color);
`;
