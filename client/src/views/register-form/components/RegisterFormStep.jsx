import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { IconElementStyle } from "../../../styles";

const RegisterStepStyle = styled.div`
	display: flex;
	align-items: center;
`;

const RegisterStepIconStyle = styled(IconElementStyle)`
	background-color: cornflowerblue;
	padding: 1rem;

	& svg {
		width: 2rem;
		height: 2rem;
	}
`;

const RegisterStepDetailsWrapperStyle = styled.div`
	margin-left: 1rem;

	& p {
		color: var(--primary-text-color);
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
			<RegisterStepIconStyle>{icon}</RegisterStepIconStyle>

			<RegisterStepDetailsWrapperStyle>
				<p>Step {currentRegisterStepIndex + 1}/3</p>
				<h3>{message}</h3>
			</RegisterStepDetailsWrapperStyle>
		</RegisterStepStyle>
	);
};

export default RegisterFormStep;
