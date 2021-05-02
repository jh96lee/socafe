import * as React from "react";
import { useSelector } from "react-redux";

import { RegisterForm, RegisterStep } from "../../views/register-form";
import { ReactComponent as Category } from "../../assets/category.svg";
import { PageStyle } from "../../styles";

import styled from "styled-components";

const RegisterPageStyle = styled(PageStyle)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 3rem auto;
`;

const RegisterElementsWrapper = styled.div`
	width: 35rem;
	margin: 0 auto;

	& > * {
		margin-bottom: 2rem;
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const RegisterPage = () => {
	const { currentFormStepIndex } = useSelector(
		(state) => state.registerReducer
	);

	const registerPageSteps = {
		0: {
			form: <RegisterForm />,
			stepCTA: "Create an account",
			stepIcon: <Category />,
		},
	};

	return (
		<RegisterPageStyle>
			<RegisterElementsWrapper>
				<RegisterStep
					stepCTA={registerPageSteps[currentFormStepIndex].stepCTA}
					stepIcon={registerPageSteps[currentFormStepIndex].stepIcon}
				/>

				{registerPageSteps[currentFormStepIndex].form}
			</RegisterElementsWrapper>
		</RegisterPageStyle>
	);
};

export default RegisterPage;
