const initialState = {
	isUserLoggingIn: false,
	email: "",
	password: "",
	loginSuccessMessage: null,
	loginErrorMessage: null,
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_USER_LOGIN":
			return {
				loginErrorMessage: null,
				isUserLoggingIn: true,
				...state,
			};
		case "END_USER_LOGIN":
			return {
				isUserLoggingIn: false,
				...state,
			};
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
