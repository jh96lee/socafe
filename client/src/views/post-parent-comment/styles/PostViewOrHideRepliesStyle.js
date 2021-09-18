import styled from "styled-components";

export const PostViewOrHideRepliesStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PostViewOrHideActionStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	& > svg {
		fill: grey;
		width: 1rem;
		height: 1rem;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > span {
		text-decoration: underline;
	}
`;
