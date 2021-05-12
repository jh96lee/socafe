import styled, { keyframes } from "styled-components";

const spinningLoader = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const LoaderStyle = styled.div`
	width: 5rem;
	height: 5rem;
	margin: auto;
	border: 0.7rem solid
		${(props) => (props.theme.isDarkMode ? "#83c0f11f" : "#af786569")};
	border-top: 0.7rem solid
		${(props) => (props.theme.isDarkMode ? "#6dd0ff" : "#a5705d")};
	border-radius: 50%;
	animation: ${spinningLoader} ease-out 2s infinite;
	/* REVIEW: this allows smooth transition to the next phase of animation */
	animation-timing-function: linear;
`;

export default LoaderStyle;
