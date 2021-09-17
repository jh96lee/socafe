import { decodePayloadFromCookie } from "../../utils";

export const setUser = () => ({
	type: "SET_USER",
	payload: decodePayloadFromCookie(),
});
