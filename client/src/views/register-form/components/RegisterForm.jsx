import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FormInput, Message } from "../../shared";

import { ButtonStyle } from "../../../styles";

import {
	setRegisterUserInfo,
	registerUser,
} from "../../../redux/register/registerAction";

import styled from "styled-components";

const FormStyle = styled.form`
	width: 100%;

	& > button {
		margin-top: 2.5rem;
		margin-bottom: 0.7rem;
	}

	& a {
		display: block;
		font-size: 1.38rem;
		letter-spacing: -0.6px;
		font-weight: 400;
		text-decoration: none;
		color: ${(props) => (props.theme.isDarkMode ? "#94c2f3" : "#417bb9")};
	}
`;

const FormFieldsetStyle = styled.fieldset`
	display: flex;
	flex-direction: column;
	border: none;

	& > *:not(:last-child) {
		margin-bottom: 2.5rem;
	}
`;

const FormInputAndMessageStyle = styled.div`
	& > p {
		margin-top: 0.5rem;
	}
`;

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
		const replicaObject = userRegisterInfoObject;

		replicaObject[e.target.name] = e.target.value;

		dispatch(setRegisterUserInfo(replicaObject));
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
				success={successMessage ? successMessage : null}
				error={errorMessage ? errorMessage : null}
				onClick={handleOnClick}
			>
				{successMessage ? successMessage : "Continue"}
			</ButtonStyle>

			<Link to="/login">Already have an account? Login</Link>
		</FormStyle>
	);
};

export default RegisterForm;
