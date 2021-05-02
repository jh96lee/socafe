import * as React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { FormInput } from "../../shared";

import {
	enterUserInfo,
	registerUser,
} from "../../../redux/register/registerAction";

import styled from "styled-components";

const RegisterFormStyle = styled.form`
	& fieldset {
		display: flex;
		flex-direction: column;
		border: none;
		border-radius: 0.5rem;
	}

	& fieldset > *:not(:last-child) {
		margin-bottom: 2.2rem;
	}
`;

const ButtonStyle = styled.button`
	font-size: 1.38rem;
	letter-spacing: -0.6px;
	padding: 1rem;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	color: ${(props) =>
		props.success
			? "var(--success-text-color)"
			: props.error
			? "var(--error-text-color)"
			: "#fff"};
	background-color: ${(props) =>
		props.success
			? "var(--success-background-color)"
			: props.error
			? "var(--error-background-color)"
			: "var(--primary-button-background-color)"};

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		color: #656565;
		background-color: var(--disabled-button-background-color);
		cursor: not-allowed;
	}
`;

const RegisterForm = () => {
	// REVIEW: data like basic user info and current form step and message sent from the server
	const userRegisterRelatedData = useSelector((state) => state.registerReducer);

	const {
		fullName,
		email,
		username,
		password,
		result,
	} = userRegisterRelatedData;

	const dispatch = useDispatch();

	const handleOnClick = async (e) => {
		e.preventDefault();

		dispatch(registerUser());
	};

	const handleOnChange = (e) => {
		const userInfoObject = userRegisterRelatedData;

		userInfoObject[e.target.name] = e.target.value;

		dispatch(enterUserInfo(userInfoObject));
	};

	return (
		<RegisterFormStyle>
			<fieldset>
				<FormInput
					inputID={"full-name"}
					inputLabel={"Full Name(required)"}
					inputName={"fullName"}
					inputType={"text"}
					inputPlaceholder={"Enter your full name"}
					onChangeEventHandler={handleOnChange}
					isLabelHidden={false}
				/>

				<FormInput
					inputID={"email"}
					inputLabel={"Email(required)"}
					inputName={"email"}
					inputType={"email"}
					inputPlaceholder={"Enter your email"}
					inputErrorMessage={result.error ? result.error.email : null}
					onChangeEventHandler={handleOnChange}
					isLabelHidden={false}
				/>

				<FormInput
					inputID={"username"}
					inputLabel={"Username(required)"}
					inputName={"username"}
					inputType={"text"}
					inputPlaceholder={"Enter your username"}
					inputErrorMessage={result.error ? result.error.username : null}
					onChangeEventHandler={handleOnChange}
					isLabelHidden={false}
				/>

				<FormInput
					inputID={"password"}
					inputLabel={"Password(required)"}
					inputName={"password"}
					inputType={"password"}
					inputPlaceholder={"Enter your password"}
					onChangeEventHandler={handleOnChange}
					isLabelHidden={false}
				/>

				<ButtonStyle
					type="submit"
					disabled={!fullName || !email || !username || !password}
					onClick={handleOnClick}
					success={result && result.success}
					error={result && result.error}
				>
					Continue
				</ButtonStyle>
			</fieldset>
		</RegisterFormStyle>
	);
};

export default RegisterForm;
