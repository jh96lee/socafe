import { fetchPayloadAndDecode } from "../../utils/cookie";

const decodedUserData = fetchPayloadAndDecode();

const initialState = {
	user: decodedUserData,
};

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
