import styled from "styled-components";

const FormStyle = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0 auto;

	& h3 {
		color: var(--txt-1);
		font-size: 2.1rem;
		font-weight: 700;
	}

	& a {
		display: inline-block;
		font-size: 1.4rem;
		font-weight: 500;
		text-decoration: underline;
		margin-top: 0.7rem;
	}
`;

export default FormStyle;
