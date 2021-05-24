import axios from "axios";

import { setUser } from "../user/userAction";

import { setCookie, decodePayload } from "../../utils/cookie";

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
		setCookie("token", token);

		const decodedUserInfoObject = decodePayload(token);

		delete data.token;

		dispatch(setLoginSuccessMessage(success));

		dispatch(setUser(decodedUserInfoObject));
	}
};
