const initialState = {
	fullName: "",
	email: "",
	username: "",
	password: "",
	isUserRegistering: false,
	userRegisterFormSuccessMessage: null,
	userRegisterFormErrorMessage: null,
};

const userRegisterFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_USER_REGISTER":
			return {
				...state,
				isUserRegistering: true,
			};
		case "END_USER_REGISTER":
			return {
				...state,
				isUserRegistering: false,
			};
		case "SET_USER_REGISTER_FORM_DATA":
			return {
				...state,
				...action.payload,
			};
		case "SET_USER_REGISTER_FORM_SUCCESS_MESSAGE":
			return {
				...state,
				userRegisterFormSuccessMessage: action.payload,
				userRegisterFormErrorMessage: null,
			};
		case "SET_USER_REGISTER_FORM_ERROR_MESSAGE":
			return {
				...state,
				userRegisterFormErrorMessage: action.payload,
			};
		case "RESET_USER_REGISTER_FORM":
			return initialState;
		default:
			return state;
	}
};

export default userRegisterFormReducer;
