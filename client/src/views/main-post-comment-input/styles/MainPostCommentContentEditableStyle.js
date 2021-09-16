import styled from "styled-components";

export const MainPostCommentContentEditableStyle = styled.div`
	color: var(--char-default);
	font-size: 1.43rem;
	background-color: var(--bg-2);
	padding: 1.2rem;
	border-radius: 1rem;
	outline: none;

	& span,
	p {
		font-size: 1.43rem;
	}

	& span {
		display: inline-block;
		color: var(--char-default);
		font-weight: 400;
		white-space: pre;
	}

	& p {
		display: inline-block;
		font-weight: 600;
	}
`;
