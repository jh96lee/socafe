const initialState = {
	email: "",
	password: "",
	result: {},
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ENTER_LOGIN_USER_INFO":
			return {
				...action.payload,
				result: state.result,
			};
		case "SET_LOGIN_RESULT":
			return {
				...state,
				result: action.payload,
			};
		default:
			return state;
	}
};

export default loginReducer;
