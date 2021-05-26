import styled, { keyframes } from "styled-components";

const spinningLoader = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderWrapperStyle = styled.div`
	position: absolute;
	z-index: 50;
	top: 5rem;
	left: 50%;
	transform: translateY(-50%);
	display: flex;
	justify-content: center;
	margin: auto;
	background-color: ${(props) => (props.theme.isDarkMode ? "#282a33" : "#fff")};
	padding: 1rem;
	border-radius: 50%;
	box-shadow: 0 0.6px 2px 1.5px var(--primary-separator-color);
`;

export const LoaderStyle = styled.div`
	width: ${(props) => (props.loaderSize ? props.loaderSize : "4rem")};
	height: ${(props) => (props.loaderSize ? props.loaderSize : "4rem")};
	border: ${(props) =>
			props.loaderBorderSize ? props.loaderBorderSize : "0.7rem"}
		solid ${(props) => (props.theme.isDarkMode ? "#83c0f159" : "#03a9f44a")};
	border-top: ${(props) =>
			props.loaderBorderSize ? props.loaderBorderSize : "0.7rem"}
		solid ${(props) => (props.theme.isDarkMode ? "#7ed3fb" : "#00afff")};
	border-radius: 50%;
	animation: ${spinningLoader} ease-out 2s infinite;
	/* REVIEW: this allows smooth transition to the next phase of animation */
	animation-timing-function: linear;
`;

export default LoaderStyle;
