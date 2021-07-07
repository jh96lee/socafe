import styled from "styled-components";

export const PostLikesStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& > svg {
		fill: #ff0000;
		width: ${(props) => props.postLikesIconSize || "2.5rem"};
		height: ${(props) => props.postLikesIconSize || "2.5rem"};
	}

	&:hover {
		cursor: pointer;
		fill: #d80000;
	}

	& > p {
		color: var(--text-1);
		font-size: ${(props) => props.postLikesLabelFontSize || "1.4rem"};
	}
`;
