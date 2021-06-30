import styled, { keyframes } from "styled-components";

const spinningLoader = keyframes`
    from {
        transform: rotate(0deg);
    }
	
    to {
        transform: rotate(360deg);
    }
`;

// TODO
export const LoaderWrapperStyle = styled.div`
	position: ${(props) => props.isLoaderAbsolute && "absolute"};
	top: ${(props) => props.isLoaderAbsolute && "50%"};
	left: ${(props) => props.isLoaderAbsolute && "50%"};
	transform: ${(props) => props.isLoaderAbsolute && "translate(-50%, -50%)"};

	display: flex;
	justify-content: center;
	margin: auto;
	border-radius: 50%;
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
