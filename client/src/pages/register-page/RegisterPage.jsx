import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RegisterForm } from "../../views/register-form";
import { CategoriesOfInterest } from "../../views/categories-of-interest";
import { Notice } from "../../views/shared";

import {
	RegisterPageStyle,
	RegisterElementsWrapper,
} from "./RegisterPageStyle";

import { ReactComponent as Complete } from "../../assets/complete.svg";

import { setUser } from "../../redux/user/userAction";

const RegisterPage = () => {
	const dispatch = useDispatch();

	const { currentRegisterStepIndex } = useSelector(
		(state) => state.registerReducer
	);

	// REVIEW: don't need to push user to home because when user state is set, then it will redirect to Homepage component
	const handleNoticeEvent = () => {
		dispatch(setUser());
	};

	const registerElements = {
		0: {
			form: <RegisterForm />,
			formCTA: "Create an account",
		},
		1: {
			form: <CategoriesOfInterest />,
			formCTA: "Choose Categories to follow",
		},
		2: {
			form: (
				<Notice
					noticeCTA="Account Created!"
					noticeEvent={handleNoticeEvent}
					noticeIcon={<Complete />}
				/>
			),
			formCTA: null,
		},
	};

	return (
		<RegisterPageStyle>
			<RegisterElementsWrapper
				currentRegisterStepIndex={currentRegisterStepIndex}
			>
				{registerElements[currentRegisterStepIndex].formCTA ? (
					<h2>{registerElements[currentRegisterStepIndex].formCTA}</h2>
				) : null}

				{registerElements[currentRegisterStepIndex].form}
			</RegisterElementsWrapper>
		</RegisterPageStyle>
	);
};

export default RegisterPage;
