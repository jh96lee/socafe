import styled from "styled-components";

export const PostCommentContentsStyle = styled.div`
	margin: 0.4rem 0 0.6rem 0;

	& > a,
	& > span {
		font-size: 1.43rem;
		font-weight: 400;
		color: var(--char-default);
	}

	& > a {
		font-weight: 500;
	}

	& > a:hover {
		text-decoration: underline;
	}
`;
