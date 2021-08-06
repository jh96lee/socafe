import styled from "styled-components";

export const FormInputStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.inputWidth || "100%"};
	height: ${(props) => props.inputHeight || "100%"};

	& label,
	input {
		color: var(--text-1);
		letter-spacing: -0.5px;
	}

	& label {
		display: ${(props) => (props.labelDisplay ? props.labelDisplay : "block")};
		font-size: 1.43rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}

	& input {
		font-size: 1.4rem;
		width: 100%;
		height: 100%;
		outline: none;
		border: none;
		box-shadow: ${(props) =>
			props.inputBoxShadow
				? props.inputBoxShadow
				: "0 0 0 1.4px var(--input-default-separator-color)"};
		border-radius: 0.5rem;
		padding: ${(props) =>
			props.inputPadding ? props.inputPadding : "1.3rem 1.45rem"};
		background-color: ${(props) =>
			props.inputBackgroundColor
				? props.inputBackgroundColor
				: "var(--input-default-bg-color)"};
	}

	& input::placeholder {
		font-size: ${(props) => props.inputPlaceholderFontSize || "1.37rem"};
		color: ${(props) =>
			props.inputPlaceholderColor
				? props.inputPlaceholderColor
				: "var(--input-placeholder-default-color)"};
	}

	& input:focus {
		box-shadow: 0 0 0 1.6px var(--input-default-focus-color);
	}
`;
