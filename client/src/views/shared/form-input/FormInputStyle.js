import styled from "styled-components";

const FormInputStyle = styled.input.attrs(
	({ inputType, inputPlaceholder }) => ({
		type: inputType,
		placeholder: inputPlaceholder,
	})
)`
	color: var(--primary-text-color);
	background-color: var(--primary-input-background-color);
	font-size: 1.37rem;
	border: 1px solid var(--primary-border-color);
	padding: 1rem;
	outline: none;

	&::placeholder {
		color: #797979;
		font-size: 1.37rem;
		letter-spacing: -0.6px;
	}
`;

export default FormInputStyle;
