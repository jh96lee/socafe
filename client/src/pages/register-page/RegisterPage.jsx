import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setUser } from "../../redux/user/userAction";

import { RegisterForm } from "../../views/register-form";
import { CategoriesOfInterest } from "../../views/categories-of-interest";
import { Notice } from "../../views/shared";

import { FormPageStyle } from "../../styles";
import { RegisterPageElementsWrapperStyle } from "./RegisterPageStyle";

import { Complete } from "../../assets";

const RegisterPage = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const { registerStepIndex } = useSelector((state) => state.registerReducer);

	// REVIEW: don't need to push user to home because when user state is set, then it will redirect to Homepage component
	const handleNoticeEvent = () => {
		dispatch(setUser());

		history.push("/");
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
		<FormPageStyle>
			<RegisterPageElementsWrapperStyle registerStepIndex={registerStepIndex}>
				{registerElements[registerStepIndex].formCTA ? (
					<h2>{registerElements[registerStepIndex].formCTA}</h2>
				) : null}

				{registerElements[registerStepIndex].form}
			</RegisterPageElementsWrapperStyle>
		</FormPageStyle>
	);
};

export default RegisterPage;
