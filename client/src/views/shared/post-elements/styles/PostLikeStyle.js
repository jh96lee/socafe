import styled from "styled-components";

export const PostLikeStyle = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => props.postLikeGap || "1.5rem"};
	color: var(--char-default);

	/* & svg {
		fill: ${(props) => props.postLikeIconColor || "var(--char-like)"};
		width: ${(props) => props.postLikeIconSize || "2.3rem"};
		height: ${(props) => props.postLikeIconSize || "2.3rem"};
	} */

	& > h5 {
		font-size: ${(props) => props.postLikeFontSize || "1.5rem"};
		font-weight: ${(props) => props.postLikeFontWeight};
	}

	&:hover {
		cursor: pointer;
	}
`;
