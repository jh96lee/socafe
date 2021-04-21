import { fetchPayloadAndDecode } from "../../utils/cookie";

export const setUser = () => {
	return {
		type: "SET_USER",
		payload: fetchPayloadAndDecode(),
	};
};
