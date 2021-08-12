import styled from "styled-components";

export const MainPostCommentMoreStyle = styled.div`
	position: absolute;
	top: -3px;
	display: none;

	& > svg {
		color: var(--icon-default-color);
		fill: var(--icon-default-color);
		width: 2rem;
		height: 2rem;
	}

	&:hover {
		cursor: pointer;
	}
`;
