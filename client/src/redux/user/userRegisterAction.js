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

export const sendUserDataAndSetUserMessage = () => async (
	dispatch,
	getState
) => {
	const userDataObject = {};
	const clientSideUserErrorObject = {};

	const userRegisterState = getState().userRegisterReducer;

	const userRegisterDataKeysArray = Object.keys(userRegisterState).filter(
		(key) => {
			return key !== "message";
		}
	);

	userRegisterDataKeysArray.forEach((key) => {
		if (!userRegisterState[key]) {
			clientSideUserErrorObject[key] = "Please fill the field";
		} else {
			// REVIEW: this is for constructing the user data object to send along with the POST request
			// TODO: gotta make sure we send fullName as full_name to fit the users table column
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

		setCookie("token", data.token);

		dispatch(setUser());

		dispatch(registerFormNextStep(1));
	}
};
