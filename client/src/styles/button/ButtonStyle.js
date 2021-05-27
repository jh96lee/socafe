import styled from "styled-components";

const ButtonStyle = styled.button`
	font-size: 1.4rem;
	font-weight: 500;
	letter-spacing: -0.6px;
	width: ${(props) => (props.width ? props.width : "100%")};
	padding: 1.3rem;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	color: ${(props) =>
		props.success
			? "var(--success-text-color)"
			: props.error
			? "var(--error-text-color)"
			: "#fff"};
	background-color: ${(props) =>
		props.success
			? "var(--success-background-color)"
			: props.error
			? "var(--error-background-color)"
			: "var(--primary-clickable-background-color)"};

	&:hover {
		background-color: ${(props) =>
			props.success
				? "var(--success-background-color)"
				: props.error
				? "var(--error-background-color)"
				: "var(--primary-hover-clickable-background-color)"};
		cursor: pointer;
	}

	&:disabled {
		color: var(--disabled-text-color);
		background-color: var(--disabled-clickable-background-color);
	}

	&:disabled:hover {
		cursor: not-allowed;
		background-color: none;
	}
`;

export default ButtonStyle;
