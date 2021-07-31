const initialState = {
	userProfile: {},
	userTotalFollowers: null,
	userTotalFollowings: null,
	isVisitorFollowing: null,
	isUserProfileLoaded: false,
	userProfileErrorMessage: null,
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
				...action.payload,
			};
		case "END_FETCHING_USER_PROFILE":
			return {
				...state,
				isUserProfileLoaded: true,
			};
		case "SET_USER_PROFILE_ERROR_MESSAGE":
			return {
				...state,
				userProfileErrorMessage: action.payload,
			};
		case "SET_IS_VISITOR_FOLLOWING":
			return {
				...state,
				isVisitorFollowing: !state.isVisitorFollowing,
			};
		case "INCREMENT_USER_TOTAL_FOLLOWERS":
			return {
				...state,
				userTotalFollowers: state.userTotalFollowers + 1,
			};
		case "DECREMENT_USER_TOTAL_FOLLOWERS":
			return {
				...state,
				userTotalFollowers: state.userTotalFollowers - 1,
			};
		case "INCREMENT_USER_TOTAL_FOLLOWINGS":
			return {
				...state,
				userTotalFollowings: state.userTotalFollowings + 1,
			};
		case "DECREMENT_USER_TOTAL_FOLLOWINGS":
			return {
				...state,
				userTotalFollowings: state.userTotalFollowings - 1,
			};
		default:
			return state;
	}
};

export default userProfileReducer;
