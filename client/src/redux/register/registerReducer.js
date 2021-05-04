const initialState = {
	currentFormStepIndex: 1,
	fullName: "",
	email: "",
	username: "",
	password: "",
	result: {},
};

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		// REVIEW: return a whole new user info object
		case "ENTER_USER_INFO":
			return {
				...action.payload,
				result: state.result,
			};
		case "SET_REGISTER_RESULT":
			return {
				...state,
				result: action.payload,
			};
		case "FORM_NEXT_STEP":
			return { ...state, currentFormStepIndex: state.currentFormStepIndex + 1 };
		default:
			return state;
	}
};

export default registerReducer;
