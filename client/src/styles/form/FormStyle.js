import styled from "styled-components";

const FormStyle = styled.form`
	width: 100%;

	& > button {
		margin-top: 2.5rem;
		margin-bottom: 0.7rem;
	}

	& a {
		color: ${(props) => (props.theme.isDarkMode ? "#94c2f3" : "#1a6be8")};
	}
`;

export default FormStyle;
