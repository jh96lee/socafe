import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { sendUserDataAndSetUserMessage } from "../../../redux/user/userRegisterAction";

import { FormInput } from "../../shared";

import RegisterFormStyle from "../styles/RegisterFormStyle";
import RegisterFormInputsWrapper from "../styles/RegisterFormInputsWrapper";
import RegisterFormButtonStyle from "../styles/RegisterFormButtonStyle";

const RegisterForm = () => {
	const { fullName, email, username, password, message } = useSelector(
		(state) => state.userRegisterReducer
	);

	const dispatch = useDispatch();

	const handleOnClick = async (e) => {
		e.preventDefault();

		dispatch(sendUserDataAndSetUserMessage());
	};

	return (
		<RegisterFormStyle>
			<RegisterFormInputsWrapper>
				<FormInput
					inputId="fullName"
					inputName="full_name"
					inputLabel="Full Name"
					inputType="text"
					errorMessage={message.fullName}
				/>

				<FormInput
					inputId="email"
					inputName="email"
					inputLabel="Email"
					inputType="email"
					errorMessage={message.email}
				/>

				<FormInput
					inputId="username"
					inputName="username"
					inputLabel="Username"
					inputType="text"
					errorMessage={message.username}
				/>

				<FormInput
					inputId="password"
					inputName="password"
					inputLabel="Password"
					inputType="password"
					errorMessage={message.password}
				/>
			</RegisterFormInputsWrapper>

			<RegisterFormButtonStyle
				onClick={handleOnClick}
				success={message.success}
				disabled={!fullName || !email || !password || !username ? true : false}
			>
				{message.success ? message.success : "Continue"}
			</RegisterFormButtonStyle>

			<Link to="/user/login">Already have an account? Log in</Link>
		</RegisterFormStyle>
	);
};

export default RegisterForm;
