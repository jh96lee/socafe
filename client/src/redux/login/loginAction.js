import axios from "axios";

import { setUser } from "../user/userAction";

import { setCookie } from "../../utils/cookie";

export const setLoginUserInfo = (userInfoObject) => ({
	type: "SET_LOGIN_USER_INFO",
	payload: userInfoObject,
});

export const setLoginSuccessMessage = (successMessage) => ({
	type: "SET_LOGIN_SUCCESS_MESSAGE",
	payload: successMessage,
});

export const setLoginErrorMessage = (errorMessage) => ({
	type: "SET_LOGIN_ERROR_MESSAGE",
	payload: errorMessage,
});

export const resetLoginForm = () => ({
	type: "RESET_LOGIN_FORM",
});

export const logoutUser = () => (dispatch) => {
	// REVIEW: set cookie to undefined and setUser action below will get the job done
	document.cookie = "token=undefined";

	dispatch(setUser());
};

export const loginUser = (userLoginInfoObject) => async (dispatch) => {
	const { email, password } = userLoginInfoObject;

	const { data } = await axios({
		method: "POST",
		url: "http://localhost:8080/user/login",
		data: {
			email,
			password,
		},
	});

	const { error, success, token } = data;

	if (error) {
		dispatch(setLoginErrorMessage(error));
	} else if (success) {
		// REVIEW: set cookie here
		setCookie("token", token);

		delete data.token;

		dispatch(setLoginSuccessMessage(success));

		// REVIEW: used the cookie that has just been set and decode it and go on from there
		dispatch(setUser());
	}
};
