const initialState = {
	commentNotificationsSuccessMessage: null,
	commentNotificationsErrorMessage: null,
};

const commentNotificationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_COMMENT_NOTIFICATIONS_SUCCESS_MESSAGE":
			return {
				...state,
				commentNotificationsSuccessMessage: action.payload,
			};
		case "SET_COMMENT_NOTIFICATIONS_ERROR_MESSAGE":
			return {
				...state,
				commentNotificationsErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default commentNotificationsReducer;
