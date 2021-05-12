import styled from "styled-components";

const UserFormStyle = styled.form`
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

	& a {
		font-size: 1.38rem;
		letter-spacing: -0.6px;
		font-weight: 400;
		text-decoration: none;
		color: ${(props) => (props.theme.isDarkMode ? "#94c2f3" : "#417bb9")};
		margin-top: -1.3rem;
	}
`;

export default UserFormStyle;
