import axios from "axios";

import { setUserRegisterStepIndex } from "../user-register-step/userRegisterStepAction";

import { setCookie } from "../../../utils/cookie/setCookie";
// REVIEW: move this to another folder later
import { setCoupleSeconds } from "../../../utils/setCoupleSeconds";

const startUserRegister = () => ({
	type: "START_USER_REGISTER",
});

const endUserRegister = () => ({
	type: "END_USER_REGISTER",
});

const setUserRegisterFormSuccessMessage = (successMessage) => ({
	type: "SET_USER_REGISTER_FORM_SUCCESS_MESSAGE",
	payload: successMessage,
});

const setUserRegisterFormErrorMessage = (errorMessageObject) => ({
	type: "SET_USER_REGISTER_FORM_ERROR_MESSAGE",
	payload: errorMessageObject,
});

export const setUserRegisterFormData = (registerFormData) => ({
	type: "SET_USER_REGISTER_FORM_DATA",
	payload: registerFormData,
});

export const resetUserRegisterForm = () => ({
	type: "RESET_USER_REGISTER_FORM",
});

export const registerUser = (userRegisterFormData) => async (dispatch) => {
	dispatch(startUserRegister());

	try {
		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/user/register",
			data: {
				...userRegisterFormData,
			},
		});

		const { error, success, token } = data;

		if (success) {
			dispatch(endUserRegister());

			setCookie("token", token);

			delete data.token;

			dispatch(setUserRegisterFormSuccessMessage(success));

			setCoupleSeconds(() => {
				dispatch(setUserRegisterStepIndex(1));
			}, 1500);
		} else if (error) {
			dispatch(endUserRegister());

			dispatch(setUserRegisterFormErrorMessage(error));
		}
	} catch (error) {
		dispatch(
			setUserRegisterFormErrorMessage({ catch: "There has been an error" })
		);
	}
};
