import axios from "axios";

import { fetchToken } from "../../utils/cookie/fetchToken";

const startChangingPassword = () => ({
	type: "START_CHANGING_PASSWORD",
});

const endChangingPassword = () => ({
	type: "END_CHANGING_PASSWORD",
});

export const setPasswordsData = (passwords) => ({
	type: "SET_PASSWORDS_DATA",
	payload: passwords,
});

export const setChangePasswordErrorMessage = (errorMessage) => ({
	type: "SET_CHANGE_PASSWORD_ERROR_MESSAGE",
	payload: errorMessage,
});

export const setChangePasswordSuccessMessage = (successMessage) => ({
	type: "SET_CHANGE_PASSWORD_SUCCESS_MESSAGE",
	payload: successMessage,
});

export const resetChangePassword = () => ({
	type: "RESET_CHANGE_PASSWORD",
});

export const changePassword = () => async (dispatch, getState) => {
	dispatch(startChangingPassword());

	const errorObject = {};

	const token = fetchToken();

	const { oldPassword, newPassword, confirmPassword } =
		getState().changePasswordReducer;

	const passwordsObject = { oldPassword, newPassword, confirmPassword };

	Object.keys(passwordsObject).forEach((key) => {
		if (!passwordsObject[key]) {
			errorObject[key] = "Please fill out this field";
		}
	});

	if (Object.keys(errorObject).length > 0) {
		dispatch(setChangePasswordErrorMessage(errorObject));

		dispatch(endChangingPassword());

		return;
	}

	if (newPassword !== confirmPassword) {
		dispatch(
			setChangePasswordErrorMessage({
				newPassword: "Passwords must match",
				confirmPassword: "Passwords must match",
			})
		);

		dispatch(endChangingPassword());

		return;
	}

	const { data } = await axios({
		method: "PUT",
		url: "http://localhost:8080/profile/edit/password",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		data: {
			...passwordsObject,
		},
	});

	const { error, success } = data;

	console.log(data);

	if (error) {
		dispatch(setChangePasswordErrorMessage(error));

		dispatch(endChangingPassword());
	} else if (success) {
		dispatch(setChangePasswordSuccessMessage(success));

		dispatch(endChangingPassword());
	}
};
