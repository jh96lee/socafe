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

	const registerStepForms = {
		0: <RegisterForm />,
		1: <CategoriesOfInterest />,
		2: (
			<Notice
				redirectURL="/"
				svgColor="green"
				message="Account Created!"
				noticeSVG={<CgCheckO />}
			/>
		),
	};

	const registerSteps = [
		{ icon: <IoPersonAddOutline />, message: "User Info" },
		{ icon: <AiOutlineSmile />, message: "Pick Categories" },
		{ icon: <IoSaveOutline />, message: "Done!" },
	];

	return (
		<RegisterPageContentStyle>
			{/* <RegisterStepsWrapperStyle>
				{registerSteps.map(({ icon, message }, idx) => {
					return (
						<RegisterFormStep
							key={`register-step__${idx}`}
							icon={icon}
							message={message}
							idx={idx}
						/>
					);
				})}
			</RegisterStepsWrapperStyle> */}

			{registerStepForms[currentRegisterStepIndex]}
		</RegisterPageContentStyle>
	);
};

export default RegisterPage;
