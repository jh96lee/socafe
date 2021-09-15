import styled from "styled-components";

export const MainPostCommentMoreStyle = styled.div`
	position: absolute;
	top: -3px;
	display: none;

	& > svg {
		color: var(--char-default);
		fill: var(--char-default);
		width: 2rem;
		height: 2rem;
	}

	&:hover {
		cursor: pointer;
	}
`;
