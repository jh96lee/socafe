const initialState = {
	otherUsersComments: [],
	isOtherUsersCommentsLoaded: false,
};

const mainPostOtherUsersCommentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_OTHER_USERS_COMMENTS":
			return {
				...state,
				isOtherUsersCommentsLoaded: false,
			};
		case "FETCHED_OTHER_USERS_COMMENTS":
			return {
				...state,
				otherUsersComments: action.payload,
			};
		case "END_FETCHING_OTHER_USERS_COMMENTS":
			return {
				...state,
				isOtherUsersCommentsLoaded: true,
			};
		default:
			return state;
	}
};

export default mainPostOtherUsersCommentsReducer;
