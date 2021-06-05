import styled from "styled-components";

const ButtonStyle = styled.button`
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: -0.6px;
	width: ${(props) => props.buttonWidth || "100%"};
	padding: ${(props) => props.buttonPadding || "1.3rem"};
	border: none;
	border-radius: 0.5rem;
	outline: none;
	color: ${(props) =>
		props.buttonColor
			? props.buttonColor
			: props.success
			? "var(--txt-success)"
			: props.error
			? "var(--txt-error)"
			: "#fff"};
	background-color: ${(props) =>
		props.buttonBackgroundColor
			? props.buttonBackgroundColor
			: props.success
			? "var(--bg-success)"
			: props.error
			? "var(--bg-error)"
			: "var(--bg-clickable-1)"};

	&:hover {
		background-color: ${(props) =>
			props.buttonHoverBackgroundColor
				? props.buttonHoverBackgroundColor
				: props.success
				? "var(--bg-success)"
				: props.error
				? "var(--bg-error)"
				: "var(--bg-clickable-hover-1)"};
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
