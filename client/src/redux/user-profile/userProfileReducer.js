const initialState = {
	userProfile: {},
	totalFollowers: null,
	totalFollowing: null,
	isUserProfileLoaded: false,
};

const userProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_USER_PROFILE":
			return {
				...state,
				isUserProfileLoaded: false,
			};
		case "FETCHED_USER_PROFILE":
			return {
				...state,
				userProfile: action.payload,
			};
		case "FETCHED_TOTAL_FOLLOWERS":
			return {
				...state,
				totalFollowers: action.payload,
			};
		case "FETCHED_TOTAL_FOLLOWING":
			return {
				...state,
				totalFollowing: action.payload,
			};
		case "END_FETCHING_USER_PROFILE":
			return {
				...state,
				isUserProfileLoaded: true,
			};
		case "INCREMENT_TOTAL_FOLLOWERS":
			return {
				...state,
				totalFollowers: state.totalFollowers + 1,
			};
		case "DECREMENT_TOTAL_FOLLOWERS":
			return {
				...state,
				totalFollowers: state.totalFollowers - 1,
			};
		case "INCREMENT_TOTAL_FOLLOWING":
			return {
				...state,
				totalFollowing: state.totalFollowing + 1,
			};
		case "DECREMENT_TOTAL_FOLLOWING":
			return {
				...state,
				totalFollowing: state.totalFollowing - 1,
			};
		default:
			return state;
	}
};

export default userProfileReducer;
