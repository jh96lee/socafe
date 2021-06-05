import axios from "axios";

import { setCookie } from "../../utils/cookie";
import { setCoupleSeconds } from "../../utils/setCoupleSeconds";

export const startUserRegister = () => ({
	type: "START_USER_REGISTER",
});

export const endUserRegister = () => ({
	type: "END_USER_REGISTER",
});

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

export const resetRegisterForm = () => ({
	type: "RESET_REGISTER_FORM",
});

export const registerUser = (userRegisterInfoObject) => async (dispatch) => {
	dispatch(startUserRegister());

	const { email, fullName, password, username } = userRegisterInfoObject;

	try {
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

		if (data) {
			dispatch(endUserRegister());

			const { error, success, token } = data;

			if (error) {
				dispatch(setRegisterErrorMessage(error));
			} else if (success) {
				setCookie("token", token);

				delete data.token;

				dispatch(setRegisterSuccessMessage(success));

				dispatch(setRegisterStep());
			}
		} else {
			dispatch({ type: "END_USER_REGISTER" });

			dispatch(
				setRegisterErrorMessage({
					general: "There has been an error while fetching for data",
				})
			);
		}
	} catch (error) {
		dispatch({ type: "END_USER_REGISTER" });

		dispatch(
			setRegisterErrorMessage({
				general: "There has been an error during your registration process",
			})
		);
	}
};
