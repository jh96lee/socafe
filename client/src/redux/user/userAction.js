import { decodePayloadFromCookie } from "../../utils/cookie/decodePayloadFromCookie";

export const setUser = () => ({
	type: "SET_USER",
	payload: decodePayloadFromCookie(),
});
