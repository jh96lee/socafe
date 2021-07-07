import styled from "styled-components";

export const AvatarImageStyle = styled.img`
	width: ${(props) => `calc(${props.avatarSize} * 0.85)`};
	height: ${(props) => `calc(${props.avatarSize} * 0.85)`};
	border-radius: 50%;
`;
