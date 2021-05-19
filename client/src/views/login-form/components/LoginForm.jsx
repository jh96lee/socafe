import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FormInput } from "../../shared";

import { UserFormStyle, UserFormButtonStyle } from "../../../styles";

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

	const generalErrorMessage = () => {
		if (result.error) {
			if (!result.error.error) {
				return null;
			} else {
				return result.error.error;
			}
		} else {
			return null;
		}
	};

	return (
		<UserFormStyle>
			<fieldset>
				{generalErrorMessage() ? <p>{generalErrorMessage()}</p> : null}

				<FormInput
					inputID={"email"}
					inputLabel={"Email"}
					inputName={"email"}
					inputType={"email"}
					inputPlaceholder={"Enter your email"}
					inputErrorMessage={result.error ? result.error.email : null}
					onChangeEventHandler={handleOnChange}
				/>

				<FormInput
					inputID={"password"}
					inputLabel={"Password"}
					inputName={"password"}
					inputType={"password"}
					inputPlaceholder={"Enter your password"}
					onChangeEventHandler={handleOnChange}
				/>

				<UserFormButtonStyle
					type="submit"
					disabled={!email || !password}
					onClick={handleOnClick}
					success={result && result.success}
					error={result && result.error}
				>
					Login
				</UserFormButtonStyle>

				<Link to="/register">New to Socafe? Create Account</Link>
			</fieldset>
		</UserFormStyle>
	);
};

export default LoginForm;
