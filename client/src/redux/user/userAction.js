import { decodePayloadFromCookie } from "../../utils/cookie";

export const setUser = () => ({
	type: "SET_USER",
	payload: decodePayloadFromCookie(),
});

export const removeUser = () => (dispatch) => {
	document.cookie = "token=undefined";

	dispatch({
		type: "REMOVE_USER",
	});
};
