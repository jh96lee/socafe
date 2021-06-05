import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FormInput, Message, Button } from "../../shared";

import {
	FormStyle,
	FormFieldsetStyle,
	FormInputAndMessageStyle,
} from "../../../styles";

import { setLoginUserInfo, loginUser } from "../../../redux/login/loginAction";

import { handleLoginAndRegisterFormInputOnChange } from "../../../utils/form/handleLoginAndRegisterFormInputOnChange";

const LoginForm = () => {
	const dispatch = useDispatch();

	const userLoginState = useSelector((state) => state.loginReducer);

	const { email, password, loginSuccessMessage, loginErrorMessage } =
		userLoginState;

	const handleOnChange = (e) => {
		handleLoginAndRegisterFormInputOnChange(
			e,
			userLoginState,
			dispatch,
			setLoginUserInfo
		);
	};

	const handleOnClick = (e) => {
		e.preventDefault();

		dispatch(loginUser(userLoginState));
	};

	return (
		<FormStyle>
			<FormFieldsetStyle>
				<FormInputAndMessageStyle>
					<FormInput
						id="login-form__email"
						label="Email"
						name="email"
						type="text"
						placeholder="Enter your email"
						onChange={handleOnChange}
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
						id="login-form__password"
						label="Password"
						name="password"
						type="password"
						placeholder="Enter your password"
						onChange={handleOnChange}
					/>

					<Message
						errorMessage={loginErrorMessage && loginErrorMessage.general}
					/>
				</FormInputAndMessageStyle>
			</FormFieldsetStyle>

			<Button
				disabled={!email || !password}
				onClick={handleOnClick}
				success={loginSuccessMessage}
				error={loginErrorMessage}
			>
				Login
			</Button>

			<Link to="/register">New to Socafe? Create Account</Link>
		</FormStyle>
	);
};

export default LoginForm;
