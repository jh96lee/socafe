import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../../redux/user/userAction";

import { RegisterForm } from "../../views/register-form";
import { CategoriesOfInterest } from "../../views/categories-of-interest";
import { Notice } from "../../views/shared";

import { PageStyle } from "../../styles";

import { Complete } from "../../assets";

import styled from "styled-components";

const RegisterPageStyle = styled(PageStyle)``;

const RegisterPageStepsWrapperStyle = styled.div`
	width: ${(props) =>
		props.registerStepIndex === 0
			? "40rem"
			: props.registerStepIndex === 1
			? "85%"
			: "100%"};
	margin: 3.5rem auto 0 auto;

	& > h2 {
		color: var(--primary-text-color);
		margin-bottom: 2rem;
	}

	@media (max-width: 600px) {
		width: ${(props) =>
			props.registerStepIndex === 0
				? "90%"
				: props.registerStepIndex === 1
				? "85%"
				: "100%"};
	}
`;

const RegisterPage = () => {
	const dispatch = useDispatch();

	const { registerStepIndex } = useSelector((state) => state.registerReducer);

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
			<RegisterPageStepsWrapperStyle registerStepIndex={registerStepIndex}>
				{registerElements[registerStepIndex].formCTA ? (
					<h2>{registerElements[registerStepIndex].formCTA}</h2>
				) : null}

				{registerElements[registerStepIndex].form}
			</RegisterPageStepsWrapperStyle>
		</RegisterPageStyle>
	);
};

export default RegisterPage;
