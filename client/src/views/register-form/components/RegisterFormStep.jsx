import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const RegisterStepStyle = styled.div`
	display: flex;
	align-items: center;
`;

const RegisterStepIconWrapperStyle = styled.div`
	border-radius: 0.5rem;
	background-color: blue;
	padding: 1rem;

	& svg {
		display: block;
		color: black;
		width: 2.5rem;
		height: 2.5rem;
	}
`;

const RegisterStepDetailsWrapperStyle = styled.div`
	margin-left: 1rem;

	& h2 {
		color: var(--primary-text-color);
		font-weight: 500;
	}

	& h3 {
		color: var(--primary-text-color);
		font-weight: 500;
	}
`;

const RegisterFormStep = ({ icon, message }) => {
	const { currentRegisterStepIndex } = useSelector(
		(state) => state.userRegisterFormReducer
	);

	return (
		<RegisterStepStyle id="register-step">
			<RegisterStepIconWrapperStyle>{icon}</RegisterStepIconWrapperStyle>

			<RegisterStepDetailsWrapperStyle>
				<h3>Step {currentRegisterStepIndex + 1}/3</h3>
				<h2>{message}</h2>
			</RegisterStepDetailsWrapperStyle>
		</RegisterStepStyle>
	);
};

export default RegisterFormStep;
