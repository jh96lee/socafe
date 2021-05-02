import axios from "axios";

import { setUser } from "../user/userAction";

import { setCookie, decodePayload } from "../../utils/cookie";

export const enterUserInfo = (userInfoObject) => ({
	type: "ENTER_USER_INFO",
	payload: userInfoObject,
});

export const setRegisterResult = (result) => ({
	type: "SET_REGISTER_RESULT",
	payload: result,
});

export const formNextStep = () => ({
	type: "FORM_NEXT_STEP",
});

export const registerUser = () => async (dispatch, getState) => {
	const enteredUserInfo = getState().registerReducer;

	const { email, fullName, password, username } = enteredUserInfo;

	const { data } = await axios({
		method: "POST",
		url: "http://localhost:8080/user/register",
		data: {
			full_name: fullName,
			email: email,
			username: username,
			password: password,
		},
	});

	const { error, success } = data;

	if (error) {
		dispatch(setRegisterResult(data));
	} else if (success) {
		const { token } = data;

		setCookie("token", token);

		const decodedUserDataObject = decodePayload(token);

		dispatch(setUser(decodedUserDataObject));

		delete data.token;

		dispatch(setRegisterResult(data));

		// dispatch(formNextStep());
	}
};
