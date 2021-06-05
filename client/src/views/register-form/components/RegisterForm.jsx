import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FormInput, Message, Loader, Button } from "../../shared";

import {
	FormStyle,
	FormFieldsetStyle,
	FormInputAndMessageStyle,
} from "../../../styles";

import {
	setRegisterUserInfo,
	registerUser,
} from "../../../redux/register/registerAction";

import { handleLoginAndRegisterFormInputOnChange } from "../../../utils/form/handleLoginAndRegisterFormInputOnChange";

const RegisterForm = () => {
	// REVIEW: data like basic user info and current form step and message sent from the server
	const userRegisterState = useSelector((state) => state.registerReducer);

	const {
		isUserRegistering,
		fullName,
		email,
		username,
		password,
		registerErrorMessage,
		registerSuccessMessage,
	} = userRegisterState;

	const dispatch = useDispatch();

	const handleOnClick = async (e) => {
		e.preventDefault();

		dispatch(registerUser(userRegisterState));
	};

	// TODO: utility function this
	const handleOnChange = (e) => {
		handleLoginAndRegisterFormInputOnChange(
			e,
			userRegisterState,
			dispatch,
			setRegisterUserInfo
		);
	};

	return (
		<FormStyle>
			<FormFieldsetStyle>
				<FormInputAndMessageStyle>
					<FormInput
						id="register-form__full-name"
						label="Full Name(required)"
						name="fullName"
						type="text"
						placeholder="Enter your full name"
						onChange={handleOnChange}
					/>
				</FormInputAndMessageStyle>

				<FormInputAndMessageStyle>
					<FormInput
						id="register-form__email"
						label="Email(required)"
						name="email"
						type="email"
						placeholder="Enter your email"
						onChange={handleOnChange}
					/>
					<Message
						errorMessage={registerErrorMessage && registerErrorMessage.email}
					/>
				</FormInputAndMessageStyle>

				<FormInputAndMessageStyle>
					<FormInput
						id="register-form__username"
						label="Username(required)"
						name="username"
						type="text"
						placeholder="Enter your username"
						onChange={handleOnChange}
					/>
					<Message
						errorMessage={registerErrorMessage && registerErrorMessage.username}
					/>
				</FormInputAndMessageStyle>

				<FormInputAndMessageStyle>
					<FormInput
						id="register-form__password"
						label="Password(required)"
						name="password"
						type="password"
						placeholder="Enter your password"
						onChange={handleOnChange}
					/>
				</FormInputAndMessageStyle>
			</FormFieldsetStyle>

			<Button
				disabled={!fullName || !email || !username || !password}
				success={registerSuccessMessage}
				error={registerErrorMessage}
				onClick={handleOnClick}
				buttonStyleObject={{ buttonWidth: "100%" }}
			>
				{isUserRegistering ? (
					<Loader loaderSize="2rem" loaderBorderSize="0.3rem" />
				) : registerSuccessMessage ? (
					registerSuccessMessage
				) : (
					"Continue"
				)}
			</Button>

			<Link to="/login">Already have an account? Login</Link>
		</FormStyle>
	);
};

export default RegisterForm;
