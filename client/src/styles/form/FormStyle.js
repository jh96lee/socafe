import styled from "styled-components";

const FormStyle = styled.form`
	margin: 3.5rem auto;

	& > h2 {
		font-size: 2.4rem;
		color: var(--char-default);
		margin-bottom: 2rem;
	}

	& > a {
		color: var(--link-cta-color);
		font-weight: 500;
	}

	@media (max-width: 500px) {
		width: 90% !important;

		& button {
			width: 100%;
		}
	}
`;

export default FormStyle;
