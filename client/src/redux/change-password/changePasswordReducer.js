const initialState = {
	oldPassword: "",
	newPassword: "",
	confirmPassword: "",
	isPasswordChanging: false,
	changePasswordErrorMessage: null,
	changePasswordSuccessMessage: null,
};

const changePasswordReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_CHANGING_PASSWORD":
			return {
				...state,
				isPasswordChanging: true,
			};
		case "END_CHANGING_PASSWORD":
			return {
				...state,
				isPasswordChanging: false,
			};
		case "SET_PASSWORDS_DATA":
			return {
				...state,
				...action.payload,
				changePasswordErrorMessage: null,
				changePasswordSuccessMessage: null,
			};
		case "SET_CHANGE_PASSWORD_ERROR_MESSAGE":
			return {
				...state,
				changePasswordErrorMessage: action.payload,
				changePasswordSuccessMessage: null,
			};
		case "SET_CHANGE_PASSWORD_SUCCESS_MESSAGE":
			return {
				...state,
				changePasswordErrorMessage: null,
				changePasswordSuccessMessage: action.payload,
			};
		case "RESET_CHANGE_PASSWORD":
			return initialState;
		default:
			return state;
	}
};

export default changePasswordReducer;
