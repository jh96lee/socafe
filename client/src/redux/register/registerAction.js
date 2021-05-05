import axios from "axios";

import { setCookie } from "../../utils/cookie";

export const enterUserInfo = (userInfoObject) => ({
	type: "ENTER_USER_INFO",
	payload: userInfoObject,
});

export const setRegisterResult = (result) => ({
	type: "SET_REGISTER_RESULT",
	payload: result,
});

export const registerNextStep = () => ({
	type: "REGISTER_NEXT_STEP",
});

export const registerUser = () => async (dispatch, getState) => {
	const enteredUserInfo = getState().registerReducer;

	const { email, fullName, password, username } = enteredUserInfo;

	const { data } = await axios({
		method: "POST",
		url: "http://localhost:8080/user/register",
		data: {
			full_name: fullName,
			email,
			username,
			password,
		},
	});

	const { error, success } = data;

	if (error) {
		dispatch(setRegisterResult(data));
	} else if (success) {
		const { token } = data;

		setCookie("token", token);

		delete data.token;

		dispatch(setRegisterResult(data));

		dispatch(registerNextStep());
	}
};
