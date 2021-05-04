import * as React from "react";
import { useSelector } from "react-redux";

import { RegisterForm, RegisterStep } from "../../views/register-form";
import { CategoriesOfInterest } from "../../views/categories-of-interest";
import { Notice } from "../../views/shared";

import {
	RegisterPageStyle,
	RegisterElementsWrapper,
} from "./RegisterPageStyle";

import { ReactComponent as Complete } from "../../assets/complete.svg";

const RegisterPage = () => {
	const { currentFormStepIndex } = useSelector(
		(state) => state.registerReducer
	);

	const registerPageSteps = {
		0: {
			form: <RegisterForm />,
			stepCTA: "Create an account",
		},
		1: {
			form: <CategoriesOfInterest />,
			stepCTA: "Choose Categories of your interest ",
		},
		2: {
			form: (
				<Notice
					noticeCTA="Account successfully created!"
					noticeIcon={<Complete />}
				/>
			),
			stepCTA: "Final Step",
		},
	};

	return (
		<RegisterPageStyle>
			<RegisterElementsWrapper registerStep={currentFormStepIndex}>
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
