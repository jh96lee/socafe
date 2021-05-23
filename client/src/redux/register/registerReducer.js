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
				// TODO: spread out the user info object
				...action.payload,
				result: state.result,
			};
		case "SET_SUCCESS_MESSAGE":
			return {
				...state,
				successMessage: action.payload,
			};
		case "SET_ERROR_MESSAGE":
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
		default:
			return state;
	}
};

export default registerReducer;
