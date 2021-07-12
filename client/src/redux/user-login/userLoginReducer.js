const initialState = {
	email: "",
	password: "",
	isUserLoggingIn: false,
	userLoginFormSuccessMessage: null,
	userLoginFormErrorMessage: null,
};

const userLoginFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_USER_LOGIN":
			return {
				...state,
				isUserLoggingIn: true,
			};
		case "END_USER_LOGIN":
			return {
				...state,
				isUserLoggingIn: false,
			};
		case "SET_USER_LOGIN_FORM_DATA":
			return {
				...state,
				...action.payload,
			};
		case "SET_USER_LOGIN_FORM_SUCCESS_MESSAGE":
			return {
				...state,
				userLoginFormSuccessMessage: action.payload,
				userLoginFormErrorMessage: null,
			};
		case "SET_USER_LOGIN_FORM_ERROR_MESSAGE":
			return {
				...state,
				userLoginFormErrorMessage: action.payload,
			};
		case "RESET_USER_LOGIN_FORM":
			return initialState;
		default:
			return state;
	}
};

export default userLoginFormReducer;
