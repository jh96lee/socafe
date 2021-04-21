import styled from "styled-components";

const RegisterStepsWrapperStyle = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	border-radius: 0.5rem;
	margin-top: 5rem;
	margin-bottom: 4rem;

	& #register-step:not(:last-child) {
		border-right: 1px solid white;
	}
`;

export default RegisterStepsWrapperStyle;
