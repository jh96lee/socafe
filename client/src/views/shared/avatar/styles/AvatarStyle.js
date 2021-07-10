import styled from "styled-components";

export const AvatarStyle = styled.div`
	position: relative;
	z-index: 5;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.avatarSize};
	height: ${(props) => props.avatarSize};

	& svg {
		position: absolute;
		z-index: 10;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: ${(props) => props.avatarSize};
		height: ${(props) => props.avatarSize};
		stroke-width: 8%;
	}

	&:hover {
		cursor: pointer;
	}
`;
