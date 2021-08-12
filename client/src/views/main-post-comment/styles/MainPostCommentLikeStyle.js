import styled from "styled-components";

export const MainPostCommentLikeStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;
	color: var(--text-1);

	& svg {
		color: var(--likes-icon-color);
		fill: var(--likes-icon-color);
		width: 1.7rem;
		height: 1.7rem;
		cursor: pointer;
	}
`;
