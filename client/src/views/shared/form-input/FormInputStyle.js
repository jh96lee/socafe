import styled from "styled-components";

export const FormInputStyle = styled.div`
	display: flex;
	flex-direction: column;

	& label,
	input {
		color: var(--primary-text-color);
		letter-spacing: -0.6px;
	}

	& label {
		display: ${(props) =>
			props.inputUsage === "search" || props.inputUsage === "search-and-select"
				? "none"
				: "block"};
		font-size: 1.47rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}

	& input {
		font-size: 1.43rem;
		width: 100%;
		outline: none;
		border: none;
		box-shadow: ${(props) =>
			props.inputUsage === "search" || props.inputUsage === "search-and-select"
				? "none"
				: "0 0 0 1.6px var(--primary-separator-color)"};
		border-radius: 0.5rem;
		padding: ${(props) =>
			props.inputPadding ? props.inputPadding : "1.4rem 1.5rem"};
		background-color: ${(props) =>
			props.inputUsage === "search" || props.inputUsage === "search-and-select"
				? "transparent"
				: "var(--secondary-background-color)"};
	}

	& input::placeholder {
		font-size: 1.43rem;
		color: ${(props) =>
			props.inputUsage === "search"
				? "var(--primary-text-color)"
				: "var(--secondary-text-color)"};
	}

	& input:focus {
		box-shadow: 0 0 0 1.6px var(--focus-separator-color);
	}
`;
