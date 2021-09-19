import styled from "styled-components";

export const PostCommentCenterHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	& > a {
		color: var(--char-default);
		font-size: 1.43rem;
		font-weight: 500;
	}

	& > a:hover {
		text-decoration: underline;
	}
`;

export const PostCommentCenterStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > :nth-child(2) {
		margin: 0.9rem 0 1.3rem 0;
	}
`;

export const DotStyle = styled.div`
	height: 3px;
	width: 3px;
	background-color: var(--char-1);
	border-radius: 50%;
`;
