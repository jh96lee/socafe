import axios from "axios";

import { setUser } from "../user/userAction";

import { setCookie } from "../../utils/cookie/setCookie";
import { setCoupleSeconds } from "../../utils/setCoupleSeconds";

export const startUserLogin = () => ({
	type: "START_USER_LOGIN",
});

export const endUserLogin = () => ({
	type: "END_USER_LOGIN",
});

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
	document.cookie = "token=undefined;path=/";

	dispatch(setUser());
};

export const loginUser = (userLoginState) => async (dispatch) => {
	const { email, password } = userLoginState;

	dispatch(startUserLogin());

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
		dispatch(endUserLogin());

		dispatch(setLoginErrorMessage(error));
	} else if (success) {
		dispatch(endUserLogin());

		// REVIEW: set cookie here
		setCookie("token", token);

		delete data.token;

		dispatch(setLoginSuccessMessage(success));

		setCoupleSeconds(() => {
			// REVIEW: used the cookie that has just been set and decode it and go on from there
			dispatch(setUser());
		}, 1000);
	}
};
