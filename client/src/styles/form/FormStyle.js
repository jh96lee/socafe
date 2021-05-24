import styled from "styled-components";

const FormStyle = styled.form`
	width: 100%;

	& > button {
		margin-top: 2.5rem;
		margin-bottom: 0.7rem;
	}

	& a {
		display: block;
		font-size: 1.4rem;
		letter-spacing: -0.6px;
		font-weight: 500;
		text-decoration: none;
		color: ${(props) => (props.theme.isDarkMode ? "#94c2f3" : "#1a6be8")};
	}
`;

export default FormStyle;
