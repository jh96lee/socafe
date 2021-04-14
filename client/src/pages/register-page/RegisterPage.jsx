import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import FormInput from "../../views/form/components/FormInput";

const FormPageStyle = styled.div`
	min-width: 100%;
`;

const FormStyle = styled.form`
	display: flex;
	flex-direction: column;
	width: 38rem;
	margin: 0 auto;

	& h3 {
		color: var(--txt-1);
		font-size: 2rem;
		font-weight: 600;
		letter-spacing: -0.7px;
	}

	& a {
		display: inline-block;
		color: var(--txt-1);
		font-size: 1.4rem;
		font-weight: 500;
		text-decoration: underline;
		letter-spacing: -0.6px;
		margin-top: 0.7rem;
	}
`;

const FormInputsWrapperStyle = styled.div`
	margin: 1rem 0 1.9rem 0;

	& div:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

const ButtonStyle = styled.button`
	font-size: 1.4rem;
	font-weight: 500;
	background-color: ${(props) =>
		props.success ? "var(--bg-success)" : "var(--btn-bg-1)"};
	color: ${(props) => (props.success ? "var(--txt-success)" : "#ffffff")};
	border: none;
	border-radius: 0.5rem;
	padding: 1rem;
	cursor: pointer;
	letter-spacing: -0.6px;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--btn-bg-disabled);
	}
`;

const RegisterPage = () => {
	const [fullName, setFullName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [successMessage, setSuccessMessage] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState(null);

	const currentStageIndex = React.useState(0);

	const handleOnClick = async (e) => {
		e.preventDefault();

		const errorMessageObject = {};

		const formInputsObject = {
			fullName,
			email,
			username,
			password,
		};
		const formValues = Object.values(formInputsObject);
		const formKeys = Object.keys(formInputsObject);

		formValues.forEach((inputValue, idx) => {
			if (!inputValue) {
				errorMessageObject[formKeys[idx]] = "Please fill out the form";
			}
		});

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
				withCredentials: true,
			});

			const { message, token } = data;

			if (!message.success) {
				setErrorMessage(message);
			} else {
				document.cookie = "token" + "=" + token + ";";

				// REVIEW: the key of this object can be success, email, password, username and etc
				setSuccessMessage(message);
			}
		}
	};

	return (
		<FormPageStyle>
			<FormStyle>
				<h3>Register</h3>

				<FormInputsWrapperStyle>
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
				</FormInputsWrapperStyle>

				<ButtonStyle
					onClick={handleOnClick}
					success={successMessage.success}
					disabled={
						!fullName || !email || !password || !username ? true : false
					}
				>
					{successMessage.success ? successMessage.success : "Continue"}
				</ButtonStyle>

				<Link to="/user/login">Already have an account? Log in</Link>
			</FormStyle>
		</FormPageStyle>
	);
};

export default RegisterPage;
