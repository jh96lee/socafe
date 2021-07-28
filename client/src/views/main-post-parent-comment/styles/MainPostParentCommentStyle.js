import styled from "styled-components";

export const MainPostParentCommentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	& > *:first-child {
		width: 100%;
	}

	& > *:not(:first-child) {
		padding-left: 5.4rem;
	}
`;

export const MainPostCommentViewRepliesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > p {
		font-size: 1.2rem;
		color: var(--text-1);
	}

	& > svg {
		fill: var(--icon-default-color);
		width: 1.2rem;
		height: 1.2rem;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > p {
		text-decoration: underline;
	}
`;
