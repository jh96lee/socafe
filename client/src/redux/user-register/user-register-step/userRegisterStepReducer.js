const initalState = {
	userRegisterStepIndex: 0,
};

const userRegisterStepReducer = (state = initalState, action) => {
	switch (action.type) {
		case "SET_USER_REGISTER_STEP_INDEX":
			return {
				userRegisterStepIndex: action.payload,
			};
		case "RESET_USER_REGISTER_STEP_INDEX":
			return initalState;
		default:
			return state;
	}
};

export default userRegisterStepReducer;
