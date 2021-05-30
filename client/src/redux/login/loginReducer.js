const initialState = {
	email: "",
	password: "",
	loginSuccessMessage: null,
	loginErrorMessage: null,
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
				loginErrorMessage: null,
				loginSuccessMessage: action.payload,
			};
		case "SET_LOGIN_ERROR_MESSAGE":
			return {
				...state,
				loginSuccessMessage: null,
				loginErrorMessage: action.payload,
			};
		case "RESET_LOGIN_FORM":
			return initialState;
		default:
			return state;
	}
};

export default loginReducer;
