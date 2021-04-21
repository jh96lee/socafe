const initialState = {
	currentRegisterStepIndex: 1,
};

const userRegisterFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case "REGISTER_FORM_NEXT_STEP":
			return {
				currentRegisterStepIndex: action.payload,
			};
		default:
			return state;
	}
};

export default userRegisterFormReducer;
