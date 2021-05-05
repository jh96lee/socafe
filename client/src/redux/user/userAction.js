import { decodePayloadFromCookie } from "../../utils/cookie";

export const setUser = () => ({
	type: "SET_USER",
	payload: decodePayloadFromCookie(),
});
