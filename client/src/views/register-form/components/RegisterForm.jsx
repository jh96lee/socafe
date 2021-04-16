import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUser } from "../../../redux/user/userAction";

import { FormInput } from "../../shared";

import {
	RegisterFormStyle,
	RegisterAndLoginFormContentStyle,
	RegisterAndLoginFormButtonStyle,
} from "../../../styles";

import { setCookie } from "../../../utils/cookie";

const RegisterForm = ({ setCurrentIndexStage }) => {
	const [fullName, setFullName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState(null);
	const [successMessage, setSuccessMessage] = React.useState({});

	const dispatch = useDispatch();

	const handleOnClick = async (e) => {
		e.preventDefault();

		const errorMessageObject = {};

		const formInputsObject = {
			fullName,
			email,
			username,
			password,
		};

		const formKeys = Object.keys(formInputsObject);

		const formValues = Object.values(formInputsObject);

		// REVIEW: construct errorMessageObject
		formValues.forEach((inputValue, idx) => {
			if (!inputValue) {
				errorMessageObject[formKeys[idx]] = "Please fill out the form";
			}
		});

		// REVIEW: if a key/property exists in errorMessageObject, that means a field is empty, therefore need to render the error message
		if (Object.keys(errorMessageObject).length !== 0) {
			setErrorMessage(errorMessageObject);
		} else {
			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/user/register",
				data: {
					full_name: fullName,
					email,
					username,
					password,
				},
			});

			// REVIEW: the message object will have one of the 4 input names if there is an error, if not it will have a success key
			const { message, token } = data;

			if (!message.success) {
				setErrorMessage(message);
			} else {
				// REVIEW: set cookie first
				setCookie("token", token);

				//REVIEW: then decode the cookie's payload and set that object to the user state
				dispatch(setUser());

				// REVIEW: the key of this object can be success, email, password, username and etc
				setSuccessMessage(message);

				setCurrentIndexStage(1);
			}
		}
	};

	return (
		<RegisterFormStyle>
			<h3>Register</h3>

			<RegisterAndLoginFormContentStyle>
				<FormInput
					inputId="full-name"
					inputName="full_name"
					inputLabel="Full Name"
					inputType="text"
					setInputState={setFullName}
					errorMessage={!errorMessage ? "" : errorMessage.fullName}
				/>

				<FormInput
					inputId="email"
					inputName="email"
					inputLabel="Email"
					inputType="email"
					inputState={email}
					setInputState={setEmail}
					errorMessage={!errorMessage ? "" : errorMessage.email}
				/>

				<FormInput
					inputId="username"
					inputName="username"
					inputLabel="Username"
					inputType="text"
					inputState={username}
					setInputState={setUsername}
					errorMessage={!errorMessage ? "" : errorMessage.username}
				/>

				<FormInput
					inputId="password"
					inputName="password"
					inputLabel="Password"
					inputType="password"
					inputState={password}
					setInputState={setPassword}
					errorMessage={!errorMessage ? "" : errorMessage.password}
				/>
			</RegisterAndLoginFormContentStyle>

			<RegisterAndLoginFormButtonStyle
				onClick={handleOnClick}
				success={successMessage.success}
				disabled={!fullName || !email || !password || !username ? true : false}
			>
				{successMessage.success ? successMessage.success : "Continue"}
			</RegisterAndLoginFormButtonStyle>

			<Link to="/user/login">Already have an account? Log in</Link>
		</RegisterFormStyle>
	);
};

export default RegisterForm;
