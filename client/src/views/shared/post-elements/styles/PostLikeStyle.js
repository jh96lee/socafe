import styled from "styled-components";

export const PostLikeStyle = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => props.postLikeGap || "0.7rem"};
	color: var(--char-default);

	& > *:first-child {
		background-color: ${(props) =>
			props.postLikeBackgroundColor || "var(--likes-bg-color)"};
		padding: ${(props) => props.postLikePadding || "0.7rem"};
	}

	& > *:first-child:hover {
		background-color: ${(props) =>
			props.postLikeHoverBackgroundColor || "var(--likes-hover-bg-color)"};
	}

	& svg {
		fill: ${(props) => props.postLikeIconColor || "var(--char-like)"};
		width: ${(props) => props.postLikeIconSize || "2.3rem"};
		height: ${(props) => props.postLikeIconSize || "2.3rem"};
	}

	& > h5 {
		font-size: ${(props) => props.postLikeFontSize || "1.5rem"};
		font-weight: ${(props) => props.postLikeFontWeight};
	}

	&:hover {
		cursor: pointer;
	}
`;
