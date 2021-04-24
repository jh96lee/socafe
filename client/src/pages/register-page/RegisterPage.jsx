import * as React from "react";
import { useSelector } from "react-redux";

import { RegisterForm, RegisterFormStep } from "../../views/register-form";
import { CategoriesOfInterest } from "../../views/categories-of-interest";
import { Notice } from "../../views/shared";

import RegisterPageContentStyle from "./RegisterPageContentStyle";
import RegisterStepsWrapperStyle from "../../views/register-form/styles/RegisterStepsWrapperStyle";

import { CgCheckO } from "react-icons/cg";
import { AiOutlineSmile } from "react-icons/ai";
import { IoPersonAddOutline, IoSaveOutline } from "react-icons/io5";

const RegisterPage = () => {
	const { currentRegisterStepIndex } = useSelector(
		(state) => state.userRegisterFormReducer
	);

	const registerForm = {
		0: {
			view: <RegisterForm />,
			step: { icon: <IoPersonAddOutline />, message: "User Info" },
		},
		1: {
			view: <CategoriesOfInterest />,
			step: { icon: <AiOutlineSmile />, message: "Pick Categories" },
		},
		2: {
			view: (
				<Notice
					redirectURL="/"
					svgColor="green"
					message="Account Created!"
					noticeSVG={<CgCheckO />}
				/>
			),
			step: { icon: <IoSaveOutline />, message: "Done!" },
		},
	};

	return (
		<RegisterPageContentStyle>
			<RegisterFormStep
				icon={registerForm[currentRegisterStepIndex].step.icon}
				message={registerForm[currentRegisterStepIndex].step.message}
			/>

			{registerForm[currentRegisterStepIndex].view}
		</RegisterPageContentStyle>
	);
};

export default RegisterPage;
