import styled from "styled-components";

const FormFieldsetStyle = styled.fieldset`
	display: flex;
	flex-direction: column;
	border: none;

	& > *:not(:last-child) {
		margin-bottom: 2.5rem;
	}
`;

export default FormFieldsetStyle;
