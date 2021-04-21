const initialState = {
	fullName: "",
	email: "",
	username: "",
	password: "",
	message: {},
};

const userRegisterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USER_INFO":
			return action.payload;
		case "SET_USER_MESSAGE":
			return {
				...state,
				message: action.payload,
			};
		default:
			return state;
	}
};

export default userRegisterReducer;
