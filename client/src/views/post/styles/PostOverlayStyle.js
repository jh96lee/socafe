import styled from "styled-components";

export const PostOverlayStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translate(-50%, -50%);
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#00000052" : "#00000052"};
	width: 100vw;
	height: 100vh;
	max-width: 100vw;
	max-height: 100vh;
`;
