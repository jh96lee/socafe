import axios from "axios";

import { setUser } from "../user/userAction";

import { setCookie } from "../../utils/cookie/setCookie";
import { setCoupleSeconds } from "../../utils/setCoupleSeconds";

const startUserLogin = () => ({
	type: "START_USER_LOGIN",
});

const endUserLogin = () => ({
	type: "END_USER_LOGIN",
});

const setUserLoginFormSuccessMessage = (successMessage) => ({
	type: "SET_USER_LOGIN_FORM_SUCCESS_MESSAGE",
	payload: successMessage,
});

const setUserLoginFormErrorMessage = (errorMessageObject) => ({
	type: "SET_USER_LOGIN_FORM_ERROR_MESSAGE",
	payload: errorMessageObject,
});

export const setUserLoginFormData = (loginFormData) => ({
	type: "SET_USER_LOGIN_FORM_DATA",
	payload: loginFormData,
});

export const resetUserLoginForm = () => ({
	type: "RESET_USER_LOGIN_FORM",
});

export const loginUser = (userLoginFormData) => async (dispatch) => {
	dispatch(startUserLogin());

	try {
		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/user/login",
			data: {
				...userLoginFormData,
			},
		});

		const { error, success, token } = data;

		if (success) {
			dispatch(endUserLogin());

			setCookie("token", token);

			delete data.token;

			dispatch(setUserLoginFormSuccessMessage(success));

			setCoupleSeconds(() => {
				// REVIEW: use the cookie that has just been set and decode it and go on from there
				dispatch(setUser());
			}, 1000);
		} else if (error) {
			dispatch(endUserLogin());

			dispatch(setUserLoginFormErrorMessage(error));
		}
	} catch (error) {
		dispatch(
			setUserLoginFormErrorMessage({ catch: "There has been an error" })
		);
	}
};

export const logoutUser = () => (dispatch) => {
	// REVIEW: set cookie to undefined and setUser action below will get the job done
	document.cookie = "token=undefined;path=/";

	dispatch(setUser());
};
