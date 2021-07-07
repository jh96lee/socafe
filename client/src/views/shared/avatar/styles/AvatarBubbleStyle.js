import styled from "styled-components";

export const AvatarBubbleStyle = styled.div`
	position: absolute;
	bottom: ${(props) => (props.bubbleOrder === 1 ? "2%" : "0.7%")};
	left: ${(props) => (props.bubbleOrder === 1 ? "8%" : "0.7%")};
	z-index: -1;
	width: ${(props) =>
		`calc(${props.avatarSize} * ${props.bubbleOrder === 1 ? "0.25" : "0.09"})`};
	height: ${(props) =>
		`calc(${props.avatarSize} * ${props.bubbleOrder === 1 ? "0.25" : "0.09"})`};
	background: ${(props) =>
		props.isAvatarRingFilled
			? "var(--bg-filled-story)"
			: "var(--bg-empty-story)"};
	border-radius: 50%;
`;
