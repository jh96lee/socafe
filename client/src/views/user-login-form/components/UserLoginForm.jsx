import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Loader } from "../../shared";
import UserLoginFormFieldset from "./UserLoginFormFieldset";

import { loginUser } from "../../../redux/user-login/userLoginAction";

import { UserLoginFormStyle } from "../styles/UserLoginFormStyle";

const UserLoginForm = () => {
	const dispatch = useDispatch();

	const {
		email,
		password,
		isUserLoggingIn,
		userLoginFormSuccessMessage,
		userLoginFormErrorMessage,
	} = useSelector((state) => state.userLoginReducer);

	const handleUserLoginFormButtonOnClick = (e) => {
		e.preventDefault();

		dispatch(loginUser({ email, password }));
	};

	const isButtonDisabled = !email || !password;

	return (
		<UserLoginFormStyle>
			<h2>Login</h2>

			<UserLoginFormFieldset />

			<Button
				disabled={isButtonDisabled}
				success={userLoginFormSuccessMessage}
				error={userLoginFormErrorMessage}
				onClick={handleUserLoginFormButtonOnClick}
				buttonStyleObject={{
					buttonMargin: "2rem 0 1rem 0",
				}}
			>
				{isUserLoggingIn ? (
					<Loader loaderSize="2rem" loaderBorderSize="0.4rem" />
				) : userLoginFormSuccessMessage ? (
					userLoginFormSuccessMessage
				) : userLoginFormErrorMessage ? (
					"Please retry"
				) : (
					"Submit"
				)}
			</Button>

			<Link to="/login">Already have an account? Login</Link>
		</UserLoginFormStyle>
	);
};

export default UserLoginForm;
