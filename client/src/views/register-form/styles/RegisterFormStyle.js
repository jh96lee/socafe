import styled from "styled-components";

import { ButtonStyle } from "../../../styles";

export const RegisterFormStyle = styled.form`
	width: 100%;

	& fieldset {
		display: flex;
		flex-direction: column;
		border: none;
		border-radius: 0.5rem;
	}

	& fieldset > *:not(:last-child) {
		margin-bottom: 2.2rem;
	}
`;

export const RegisterFormButtonStyle = styled(ButtonStyle)`
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

	&:disabled {
		color: #656565;
		background-color: var(--disabled-button-background-color);
		cursor: not-allowed;
	}
`;
