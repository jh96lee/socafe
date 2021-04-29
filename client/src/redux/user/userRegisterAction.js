import axios from "axios";

import { setUser } from "./userAction";
import { registerFormNextStep } from "./userRegisterFormAction";

import { setCookie } from "../../utils/cookie";

export const setUserInfo = (userInfo) => {
	return {
		type: "SET_USER_INFO",
		payload: userInfo,
	};
};

export const registerUser = () => async (dispatch, getState) => {
	const userDataObject = {};
	const clientSideUserErrorObject = {};

	const userRegisterState = getState().userRegisterReducer;

	// REVIEW: this is to remove the message key from the intial state
	const userRegisterDataKeysArray = Object.keys(userRegisterState).filter(
		(key) => {
			return key !== "message";
		}
	);

	userRegisterDataKeysArray.forEach((key) => {
		const userDataValue = userRegisterState[key];

		if (!userDataValue) {
			clientSideUserErrorObject[key] = "Please fill the field";
		} else {
			// REVIEW: this is for changing fullName to full_name when sending data to the server
			const objectKey = key === "fullName" ? "full_name" : key;

			userDataObject[objectKey] = userRegisterState[key];
		}
	});

	const clientSideErrorObjectKeysArray = Object.keys(clientSideUserErrorObject);

	if (clientSideErrorObjectKeysArray.length > 0) {
		dispatch({
			type: "SET_USER_MESSAGE",
			payload: clientSideUserErrorObject,
		});
	} else {
		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/user/register",
			data: {
				...userDataObject,
			},
		});

		// REVIEW: if we got an error message then we render the error message and that is it
		// REVIEW: if we get a success message, then we increment the currentStateIndex by 1, set cookie and set user state object within
		// REVIEW: the RegisterPage component
		dispatch({
			type: "SET_USER_MESSAGE",
			payload: data.message,
		});

		if (data.message.success) {
			setCookie("token", data.token);

			dispatch(setUser());

			dispatch(registerFormNextStep(1));
		}
	}
};
