import styled from "styled-components";

export const MainPostCommentStyle = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr min-content;
	gap: 1.4rem;
	color: var(--text-1);
	width: 100%;
`;

export const MainPostCommentBodyStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MainPostCommentHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	& > a {
		color: var(--text-1);
		font-size: 1.45rem;
		font-weight: 500;
	}
`;

export const MainPostCommentLikesStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;

	& svg {
		color: var(--likes-icon-color);
		fill: var(--likes-icon-color);
		width: 1.7rem;
		height: 1.7rem;
		cursor: pointer;
	}
`;

export const MainPostCommentDotStyle = styled.div`
	height: 3px;
	width: 3px;
	background-color: grey;
	border-radius: 50%;
`;
