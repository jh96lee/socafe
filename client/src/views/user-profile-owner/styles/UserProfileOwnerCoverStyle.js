import styled from "styled-components";

export const UserProfileOwnerCoverStyle = styled.div`
	position: relative;
	z-index: 5;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#b0c4de0f" : "#fffaf0"};
	height: 100%;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;

	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;
`;

export const UserProfileOwnerCoverDotStyle = styled.div`
	position: absolute;
	top: ${(props) => `${props.shapeTop}%`};
	left: ${(props) => `${props.shapeLeft}%`};
	z-index: 10;
	width: ${(props) => `${props.shapeSize}px`};
	height: ${(props) => `${props.shapeSize}px`};
	border-radius: 50%;
	background-color: ${(props) => props.shapeBackgroundColor};
	box-shadow: 0 0 0px 1px ${(props) => props.shapeBackgroundColor};
`;
