import { decodePayloadFromCookie } from "../../utils/cookie/decodePayloadFromCookie";

const initialState = { user: decodePayloadFromCookie() };

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				user: action.payload,
			};
		case "REMOVE_USER":
			return {
				user: null,
			};
		default:
			return state;
	}
};

export default userReducer;
