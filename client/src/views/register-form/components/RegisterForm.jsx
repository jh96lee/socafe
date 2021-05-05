import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FormInput } from "../../shared";

import {
	RegisterFormStyle,
	RegisterFormButtonStyle,
} from "../styles/RegisterFormStyle";

import {
	enterUserInfo,
	registerUser,
} from "../../../redux/register/registerAction";

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
				/>

				<FormInput
					inputID={"email"}
					inputLabel={"Email(required)"}
					inputName={"email"}
					inputType={"email"}
					inputPlaceholder={"Enter your email"}
					inputErrorMessage={result.error ? result.error.email : null}
					onChangeEventHandler={handleOnChange}
				/>

				<FormInput
					inputID={"username"}
					inputLabel={"Username(required)"}
					inputName={"username"}
					inputType={"text"}
					inputPlaceholder={"Enter your username"}
					inputErrorMessage={result.error ? result.error.username : null}
					onChangeEventHandler={handleOnChange}
				/>

				<FormInput
					inputID={"password"}
					inputLabel={"Password(required)"}
					inputName={"password"}
					inputType={"password"}
					inputPlaceholder={"Enter your password"}
					onChangeEventHandler={handleOnChange}
				/>

				<RegisterFormButtonStyle
					type="submit"
					disabled={!fullName || !email || !username || !password}
					onClick={handleOnClick}
					success={result && result.success}
					error={result && result.error}
				>
					Continue
				</RegisterFormButtonStyle>
			</fieldset>
		</RegisterFormStyle>
	);
};

export default RegisterForm;
