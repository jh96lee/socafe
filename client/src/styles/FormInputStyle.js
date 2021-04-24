import styled from "styled-components";

const FormInputStyle = styled.input.attrs(({ type, placeholder }) => ({
	type: type,
	placeholder: `${placeholder}`,
}))`
	color: var(--primary-text-color);
	background-color: var(--primary-input-background-color);
	font-size: 1.37rem;
	border: 1px solid var(--primary-border-color);
	padding: 1rem;
	outline: none;
`;

export default FormInputStyle;
