const initialState = {
	registerStepIndex: 0,
	fullName: "",
	email: "",
	username: "",
	password: "",
	successMessage: null,
	errorMessage: null,
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
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
				errorMessage: null,
				successMessage: action.payload,
			};
		case "SET_REGISTER_ERROR_MESSAGE":
			return {
				...state,
				// REVIEW: needs to be 1 level object
				errorMessage: action.payload,
			};
		case "SET_REGISTER_STEP":
			return {
				...state,
				registerStepIndex: state.registerStepIndex + 1,
			};
		case "RESET_REGISTER_STEP":
			return {
				...state,
				registerStepIndex: 0,
			};
		default:
			return state;
	}
};

export default registerReducer;
