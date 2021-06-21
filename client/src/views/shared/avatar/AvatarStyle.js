import styled from "styled-components";

export const AvatarStyle = styled.div`
	position: relative;
	background: ${(props) =>
		props.isAvatarRing
			? "linear-gradient(to right, #DD2476, #FF512F);"
			: "var(--txt-2)"};
	width: ${(props) => (props.avatarSize ? props.avatarSize : "4rem")};
	height: ${(props) => (props.avatarSize ? props.avatarSize : "4rem")};
	object-fit: cover;
	border-radius: ${(props) => props.avatarBorderRadius || "50%"};

	&::after {
		content: "";
		position: absolute;
		z-index: 10;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: var(--bg-1);
		width: 92%;
		height: 92%;
		border-radius: ${(props) => props.avatarBorderRadius || "50%"};
	}

	& > img {
		position: absolute;
		z-index: 15;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 84%;
		height: 84%;
		border-radius: ${(props) => props.avatarBorderRadius || "50%"};
	}

	&:hover {
		cursor: pointer;
	}
`;
