import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FormInput, Message } from "../../shared";

import {
	ButtonStyle,
	FormStyle,
	FormFieldsetStyle,
	FormInputAndMessageStyle,
} from "../../../styles";

import {
	setRegisterUserInfo,
	registerUser,
} from "../../../redux/register/registerAction";

import { handleFormInputOnChange } from "../../../utils/form/handleFormInputOnChange";

const RegisterForm = () => {
	// REVIEW: data like basic user info and current form step and message sent from the server
	const userRegisterInfoObject = useSelector((state) => state.registerReducer);

	const { fullName, email, username, password, errorMessage, successMessage } =
		userRegisterInfoObject;

	const dispatch = useDispatch();

	const handleOnClick = async (e) => {
		e.preventDefault();

		dispatch(registerUser(userRegisterInfoObject));
	};

	// TODO: utility function this
	const handleOnChange = (e) => {
		handleFormInputOnChange(
			e,
			userRegisterInfoObject,
			dispatch,
			setRegisterUserInfo
		);
	};

	return (
		<FormStyle>
			<FormFieldsetStyle>
				<FormInputAndMessageStyle>
					<FormInput
						inputUsage="form"
						inputID="register-form__full-name"
						inputLabel="Full Name(required)"
						inputName="fullName"
						inputType="text"
						inputPlaceholder="Enter your full name"
						inputWidth="100%"
						inputOnChangeEventHandler={handleOnChange}
					/>
				</FormInputAndMessageStyle>

				<FormInputAndMessageStyle>
					<FormInput
						inputUsage="form"
						inputID="register-form__email"
						inputLabel="Email(required)"
						inputName="email"
						inputType="email"
						inputPlaceholder="Enter your email"
						inputWidth="100%"
						inputOnChangeEventHandler={handleOnChange}
					/>
					<Message errorMessage={errorMessage && errorMessage.email} />
				</FormInputAndMessageStyle>

				<FormInputAndMessageStyle>
					<FormInput
						inputUsage="form"
						inputID="register-form__username"
						inputLabel="Username(required)"
						inputName="username"
						inputType="text"
						inputPlaceholder="Enter your username"
						inputWidth="100%"
						inputOnChangeEventHandler={handleOnChange}
					/>
					<Message errorMessage={errorMessage && errorMessage.username} />
				</FormInputAndMessageStyle>

				<FormInputAndMessageStyle>
					<FormInput
						inputUsage="form"
						inputID="register-form__password"
						inputLabel="Password(required)"
						inputName="password"
						inputType="password"
						inputPlaceholder="Enter your password"
						inputWidth="100%"
						inputOnChangeEventHandler={handleOnChange}
					/>
				</FormInputAndMessageStyle>
			</FormFieldsetStyle>

			<ButtonStyle
				disabled={!fullName || !email || !username || !password}
				width="100%"
				isDisabled={!fullName || !email || !username || !password}
				success={successMessage}
				error={errorMessage}
				onClick={handleOnClick}
			>
				{successMessage ? successMessage : "Continue"}
			</ButtonStyle>

			<Link to="/login">Already have an account? Login</Link>
		</FormStyle>
	);
};

export default RegisterForm;
