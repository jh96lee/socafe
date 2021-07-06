import styled from "styled-components";

const ButtonStyle = styled.button`
	position: ${(props) => props.buttonPosition};
	font-size: ${(props) => props.buttonFontSize || "1.4rem"};
	font-weight: ${(props) => props.buttonFontWeight || "500"};
	letter-spacing: -0.6px;
	width: ${(props) => props.buttonWidth || "100%"};
	height: ${(props) => props.buttonHeight || "100%"};
	min-width: ${(props) => props.buttonMinWidth};
	min-height: ${(props) => props.buttonMinHeight};
	padding: ${(props) => props.buttonPadding || "1.3rem"};
	margin: ${(props) => props.buttonMargin};
	box-shadow: ${(props) => props.buttonBoxShadow};
	border: none;
	border-radius: 0.5rem;
	outline: none;
	color: ${(props) =>
		props.success
			? "var(--txt-success)"
			: props.error
			? "var(--txt-error)"
			: props.buttonColor
			? props.buttonColor
			: "#fff"};
	background-color: ${(props) =>
		props.success
			? "var(--bg-success)"
			: props.error
			? "var(--bg-error)"
			: props.buttonBackgroundColor
			? props.buttonBackgroundColor
			: "var(--button-default-bg-color)"};

	&:hover {
		background-color: ${(props) =>
			props.success
				? "var(--bg-success)"
				: props.error
				? "var(--bg-error)"
				: props.buttonHoverBackgroundColor
				? props.buttonHoverBackgroundColor
				: "var(--button-default-hover-bg-color)"};
		cursor: pointer;
	}

	&:disabled {
		color: ${(props) => props.buttonDisabledColor || "var(--txt-disabled)"};
		background-color: ${(props) =>
			props.buttonDisabledBackgroundColor || "var(--bg-clickable-disabled)"};
	}

	&:disabled:hover {
		cursor: not-allowed;
		background-color: none;
	}
`;

export default ButtonStyle;
