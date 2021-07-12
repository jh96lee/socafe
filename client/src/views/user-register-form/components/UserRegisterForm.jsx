import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Loader } from "../../shared";
import UserRegisterFormFieldset from "./UserRegisterFormFieldset";

import { registerUser } from "../../../redux/user-register/user-register-form/userRegisterFormAction";

import { UserRegisterFormStyle } from "../styles/UserRegisterFormStyle";

const UserRegisterForm = () => {
	const dispatch = useDispatch();

	const {
		fullName,
		email,
		username,
		password,
		isUserRegistering,
		userRegisterFormSuccessMessage,
		userRegisterFormErrorMessage,
	} = useSelector((state) => state.userRegisterFormReducer);

	const handleUserRegisterFormButtonOnClick = (e) => {
		e.preventDefault();

		dispatch(registerUser({ fullName, email, username, password }));
	};

	const isButtonDisabled = !fullName || !email || !username || !password;

	return (
		<UserRegisterFormStyle>
			<h2>Create an account</h2>

			<UserRegisterFormFieldset />

			<Button
				disabled={isButtonDisabled}
				success={userRegisterFormSuccessMessage}
				error={userRegisterFormErrorMessage}
				onClick={handleUserRegisterFormButtonOnClick}
				buttonStyleObject={{
					buttonMargin: "2rem 0 1rem 0",
				}}
			>
				{isUserRegistering ? (
					<Loader loaderSize="2rem" loaderBorderSize="0.4rem" />
				) : userRegisterFormSuccessMessage ? (
					userRegisterFormSuccessMessage
				) : userRegisterFormErrorMessage ? (
					"Please retry"
				) : (
					"Submit"
				)}
			</Button>

			<Link to="/login">Already have an account? Login</Link>
		</UserRegisterFormStyle>
	);
};

export default UserRegisterForm;
