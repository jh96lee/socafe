import styled from "styled-components";

export const MainPostCommentsContentEditableStyle = styled.div`
	color: var(--text-1);
	font-size: 1.37rem;
	background-color: var(--input-default-bg-color);
	box-shadow: 0 0 0 1px var(--input-default-separator-color);
	padding: 1.2rem;
	border-radius: 1rem;
	outline: none;

	& span {
		display: inline-block;
		color: var(--text-1);
		font-weight: 300;
		white-space: pre;
	}

	& p {
		display: inline-block;
		font-weight: 600;
	}
`;
