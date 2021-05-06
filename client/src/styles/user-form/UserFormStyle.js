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
		font-weight: 300;
		text-decoration: none;
		color: #94c2f3;
		margin-top: -1.3rem;
	}
`;

export default UserFormStyle;
