import styled from "styled-components";

const ButtonStyle = styled.button`
	position: ${(props) => props.buttonPosition || "relative"};
	display: ${(props) => props.buttonDisplay || "flex"};
	justify-content: center;
	align-items: center;
	gap: 0.3rem;
	background-color: ${(props) =>
		props.success
			? "var(--bg-success)"
			: props.error
			? "var(--bg-error)"
			: props.buttonBackgroundColor || "var(--bg-button-default)"};
	color: ${(props) =>
		props.success
			? "var(--char-success)"
			: props.error
			? "var(--char-error)"
			: props.buttonColor || "#fff"};
	font-size: ${(props) => props.buttonFontSize || "1.43rem"};
	font-weight: ${(props) => props.buttonFontWeight || "500"};
	letter-spacing: -0.5px;
	border: ${(props) => props.buttonBorder || "none"};
	border-radius: ${(props) => props.buttonBorderRadius || "0.7rem"};
	width: ${(props) => props.buttonWidth || "fit-content"};
	height: ${(props) => props.buttonHeight || "fit-content"};
	margin: ${(props) => props.buttonMargin};
	padding: ${(props) => props.buttonPadding || "1.4rem"};
	box-shadow: ${(props) => props.buttonBoxShadow || "none"};
	outline: none;

	&:hover {
		background-color: ${(props) =>
			props.success
				? "var(--bg-success-hover)"
				: props.error
				? "var(--bg-error-hover)"
				: props.buttonHoverBackgroundColor
				? props.buttonHoverBackgroundColor
				: "var(--bg-button-default-hover)"};
		cursor: pointer;
	}

	&:disabled {
		color: var(--char-button-disabled);
		background-color: var(--bg-button-disabled);
	}

	&:disabled:hover {
		cursor: not-allowed;
		background-color: none;
	}
`;

export default ButtonStyle;
