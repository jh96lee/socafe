import styled from "styled-components";

const FormInputStyle = styled.input.attrs(({ inputType, inputLabel }) => ({
	type: inputType,
	placeholder: `Enter ${inputLabel}`,
}))`
	color: var(--txt-1);
	background-color: var(--input-bg-1);
	border: 0.18rem solid var(--border-1);
	border-radius: 0.5rem;
	padding: 1rem;
	outline: none;
`;

export default FormInputStyle;
