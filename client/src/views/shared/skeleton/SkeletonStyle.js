import styled, { keyframes } from "styled-components";

export const SkeletonStyle = styled.div`
	width: ${(props) => props.skeletonWidth};
	height: ${(props) => props.skeletonHeight};
	background-image: ${(props) =>
		props.theme.isDarkMode
			? "linear-gradient(135deg,#080808 20%,#121317 70%)"
			: "linear-gradient(135deg, #d5e3e9 20%, #e4ebee 70%)"};
	animation-timing-function: linear;
	border-radius: ${(props) =>
		props.skeletonBorderRadius ? props.skeletonBorderRadius : "1rem"};
`;
