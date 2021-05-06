import axios from "axios";

import { setUser } from "../user/userAction";

import { setCookie, decodePayload } from "../../utils/cookie";

export const enterLoginUserInfo = (userInfoObject) => ({
	type: "ENTER_LOGIN_USER_INFO",
	payload: userInfoObject,
});

export const setLoginResult = (result) => ({
	type: "SET_LOGIN_RESULT",
	payload: result,
});

export const loginUser = () => async (dispatch, getState) => {
	const enteredUserInfo = getState().loginReducer;

	const { email, password } = enteredUserInfo;

	const { data } = await axios({
		method: "POST",
		url: "http://localhost:8080/user/login",
		data: {
			email,
			password,
		},
	});

	const { error, success } = data;

	if (error) {
		dispatch(setLoginResult(data));
	} else if (success) {
		const { token } = data;

		setCookie("token", token);

		const decodedUserInfoObject = decodePayload(token);

		delete data.token;

		dispatch(setLoginResult(data));

		dispatch(setUser(decodedUserInfoObject));
	}
};
