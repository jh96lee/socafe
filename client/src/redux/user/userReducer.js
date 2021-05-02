import { decodePayloadFromCookie } from "../../utils/cookie";

const initialState = { user: decodePayloadFromCookie() };

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				user: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
