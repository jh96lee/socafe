const initialState = {
	isUserRegistering: false,
	registerStepIndex: 0,
	fullName: "",
	email: "",
	username: "",
	password: "",
	registerSuccessMessage: null,
	registerErrorMessage: null,
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_USER_REGISTER":
			return {
				...state,
				registerSuccessMessage: null,
				registerErrorMessage: null,
				isUserRegistering: true,
			};
		case "END_USER_REGISTER":
			return {
				...state,
				isUserRegistering: false,
			};
		// REVIEW: return a whole new user info object
		case "SET_REGISTER_USER_INFO":
			return {
				...state,
				// TODO: spread out the user info object
				...action.payload,
			};
		case "SET_REGISTER_SUCCESS_MESSAGE":
			return {
				...state,
				// REVIEW: when successful registration happens, we want to reset the errorMessage state to null
				registerErrorMessage: null,
				registerSuccessMessage: action.payload,
			};
		case "SET_REGISTER_ERROR_MESSAGE":
			return {
				...state,
				registerSuccessMessage: null,
				// REVIEW: needs to be 1 level object
				registerErrorMessage: action.payload,
			};
		case "SET_REGISTER_STEP":
			return {
				...state,
				registerStepIndex: state.registerStepIndex + 1,
			};
		case "RESET_REGISTER_FORM":
			return initialState;
		default:
			return state;
	}
};

export default registerReducer;
