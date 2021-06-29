import styled from "styled-components";

export const AvatarStyle = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) =>
		props.isAvatarRingFilled
			? "var(--bg-filled-story)"
			: "var(--bg-empty-story)"};
	width: ${(props) => (props.avatarSize ? props.avatarSize : "4rem")};
	height: ${(props) => (props.avatarSize ? props.avatarSize : "4rem")};
	object-fit: cover;
	border-radius: ${(props) => props.avatarBorderRadius || "50%"};

	& > img {
		background-color: ${(props) => (props.theme.isDarkMode ? "#000" : "#fff")};
		padding: ${(props) => `calc(${props.avatarSize} * 0.03)`};
		width: 88%;
		height: 88%;
		border-radius: ${(props) => props.avatarBorderRadius || "50%"};
	}

	&:hover {
		cursor: pointer;
	}
`;

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
