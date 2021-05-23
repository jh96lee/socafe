import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FormInput, Message } from "../../shared";

import {
	enterLoginUserInfo,
	loginUser,
} from "../../../redux/login/loginAction";

const LoginForm = () => {
	const dispatch = useDispatch();

	const userLoginRelatedData = useSelector((state) => state.loginReducer);

	const { email, password, result } = userLoginRelatedData;

	const handleOnChange = (e) => {
		const userInfoObject = userLoginRelatedData;

		userInfoObject[e.target.name] = e.target.value;

		dispatch(enterLoginUserInfo(userInfoObject));
	};

	const handleOnClick = (e) => {
		e.preventDefault();

		dispatch(loginUser());
	};

	return (
		<h1>LOGIN</h1>
		// <UserFormStyle>
		// 	<fieldset>
		// 		{/* <Message errorMessage={result && result.error.general} /> */}

		// 		<FormInput
		// 			inputUsage="form"
		// 			inputID="login-form__email"
		// 			inputLabel="Email"
		// 			inputName="email"
		// 			inputType="text"
		// 			inputPlaceholder="Enter your email"
		// 			inputWidth="100%"
		// 			inputOnChangeEventHandler={handleOnChange}
		// 		/>
		// 		<Message errorMessage={result && result.error.email} />

		// 		<FormInput
		// 			inputUsage="form"
		// 			inputID="login-form__password"
		// 			inputLabel="Password"
		// 			inputName="password"
		// 			inputType="text"
		// 			inputPlaceholder="Enter your password"
		// 			inputWidth="100%"
		// 			inputOnChangeEventHandler={handleOnChange}
		// 		/>

		// 		<UserFormButtonStyle
		// 			type="submit"
		// 			disabled={!email || !password}
		// 			onClick={handleOnClick}
		// 			success={result && result.success}
		// 			error={result && result.error}
		// 		>
		// 			Login
		// 		</UserFormButtonStyle>

		// 		<Link to="/register">New to Socafe? Create Account</Link>
		// 	</fieldset>
		// </UserFormStyle>
	);
};

export default LoginForm;
