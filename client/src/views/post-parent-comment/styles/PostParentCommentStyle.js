import styled from "styled-components";

export const PostParentCommentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	& > *:first-child {
		width: 100%;
	}

	& > *:nth-child(2) {
		padding-left: 6.35rem;
		padding-right: 1.35rem;
	}

	& > *:last-child {
		padding-left: 6.5rem;
	}
`;

export const PostCommentViewRepliesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > p {
		font-size: 1.2rem;
		color: var(--char-default);
	}

	& > svg {
		fill: var(--char-default);
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
