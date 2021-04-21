import styled from "styled-components";

const FormInputLabelWrapper = styled.div`
	display: flex;
	flex-direction: column;

	& label {
		color: var(--txt-1);
		font-size: 1.47rem;
		font-weight: 500;
		letter-spacing: -0.4px;
		margin-bottom: 0.4rem;
	}

	& p {
		color: var(--txt-err);
		background-color: var(--bg-err);
		font-size: 1.33rem;
		font-weight: 500;
		margin-top: 0.2rem;
		padding: 1rem;
		border-radius: 0.5rem;
	}
`;

export default FormInputLabelWrapper;
