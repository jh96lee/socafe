import axios from "axios";

import { setCookie } from "../../utils/cookie";
import { setCoupleSeconds } from "../../utils/setCoupleSeconds";

export const setRegisterUserInfo = (userInfoObject) => ({
	type: "SET_REGISTER_USER_INFO",
	payload: userInfoObject,
});

export const setRegisterSuccessMessage = (successMessage) => ({
	type: "SET_REGISTER_SUCCESS_MESSAGE",
	payload: successMessage,
});

export const setRegisterErrorMessage = (errorMessage) => ({
	type: "SET_REGISTER_ERROR_MESSAGE",
	payload: errorMessage,
});

export const setRegisterStep = () => (dispatch) => {
	setCoupleSeconds(() => {
		dispatch({ type: "SET_REGISTER_STEP" });
	}, 1500);
};

export const resetRegisterStep = () => ({
	type: "RESET_REGISTER_STEP",
});

export const registerUser = (userRegisterInfoObject) => async (dispatch) => {
	const { email, fullName, password, username } = userRegisterInfoObject;

	const { data } = await axios({
		method: "POST",
		url: "http://localhost:8080/user/register",
		data: {
			fullName,
			email,
			username,
			password,
		},
	});

	const { error, success, token } = data;

	if (error) {
		dispatch(setRegisterErrorMessage(error));
	} else if (success) {
		setCookie("token", token);

		delete data.token;

		dispatch(setRegisterSuccessMessage(success));

		dispatch(setRegisterStep());
	}
};
