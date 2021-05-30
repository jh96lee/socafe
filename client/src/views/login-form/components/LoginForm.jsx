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

import { setLoginUserInfo, loginUser } from "../../../redux/login/loginAction";

import { handleFormInputOnChange } from "../../../utils/form/handleFormInputOnChange";

const LoginForm = () => {
	const dispatch = useDispatch();

	const userLoginInfoObject = useSelector((state) => state.loginReducer);

	const { email, password, loginSuccessMessage, loginErrorMessage } =
		userLoginInfoObject;

	const handleOnChange = (e) => {
		handleFormInputOnChange(e, userLoginInfoObject, dispatch, setLoginUserInfo);
	};

	const handleOnClick = (e) => {
		e.preventDefault();

		dispatch(loginUser(userLoginInfoObject));
	};

	return (
		<FormStyle>
			<FormFieldsetStyle>
				<FormInputAndMessageStyle>
					<FormInput
						inputUsage="form"
						inputID="login-form__email"
						inputLabel="Email"
						inputName="email"
						inputType="text"
						inputPlaceholder="Enter your email"
						inputWidth="100%"
						inputOnChangeEventHandler={handleOnChange}
					/>

					<Message
						errorMessage={loginErrorMessage && loginErrorMessage.email}
					/>
					<Message
						errorMessage={loginErrorMessage && loginErrorMessage.general}
					/>
				</FormInputAndMessageStyle>

				<FormInputAndMessageStyle>
					<FormInput
						inputUsage="form"
						inputID="login-form__password"
						inputLabel="Password"
						inputName="password"
						inputType="password"
						inputPlaceholder="Enter your password"
						inputWidth="100%"
						inputOnChangeEventHandler={handleOnChange}
					/>

					<Message
						errorMessage={loginErrorMessage && loginErrorMessage.general}
					/>
				</FormInputAndMessageStyle>
			</FormFieldsetStyle>

			<ButtonStyle
				type="submit"
				disabled={!email || !password}
				onClick={handleOnClick}
				success={loginSuccessMessage}
				error={loginErrorMessage}
			>
				Login
			</ButtonStyle>

			<Link to="/register">New to Socafe? Create Account</Link>
		</FormStyle>
	);
};

export default LoginForm;
