const initialState = {
	email: "",
	password: "",
	successMessage: null,
	errorMessage: null,
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_LOGIN_USER_INFO":
			return {
				...state,
				...action.payload,
			};
		case "SET_LOGIN_SUCCESS_MESSAGE":
			return {
				...state,
				errorMessage: null,
				successMessage: action.payload,
			};
		case "SET_LOGIN_ERROR_MESSAGE":
			return {
				...state,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default loginReducer;
