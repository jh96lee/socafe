import styled from "styled-components";

export const PostCommentLikeStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;
	color: var(--char-default);

	& svg {
		color: var(--char-like);
		fill: var(--char-like);
		width: 1.7rem;
		height: 1.7rem;
		cursor: pointer;
	}
`;
