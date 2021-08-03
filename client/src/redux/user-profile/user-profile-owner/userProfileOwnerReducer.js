const initialState = {
	profileOwner: {},
	profileOwnerTotalFollowers: null,
	profileOwnerTotalFollowings: null,
	isVisitorFollowingProfileOwner: null,
	isProfileOwnerLoaded: false,
};

const userProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_PROFILE_OWNER":
			return {
				...state,
				isProfileOwnerLoaded: false,
			};
		case "FETCHED_PROFILE_OWNER":
			return {
				...state,
				...action.payload,
			};
		case "END_FETCHING_PROFILE_OWNER":
			return {
				...state,
				isProfileOwnerLoaded: true,
			};
		case "SET_IS_VISITOR_FOLLOWING_PROFILE_OWNER":
			return {
				...state,
				isVisitorFollowingProfileOwner: !state.isVisitorFollowing,
			};
		case "INCREMENT_PROFILE_OWNER_TOTAL_FOLLOWERS":
			return {
				...state,
				profileOwnerTotalFollowers: state.profileOwnerTotalFollowers + 1,
			};
		case "DECREMENT_PROFILE_OWNER_TOTAL_FOLLOWERS":
			return {
				...state,
				profileOwnerTotalFollowers: state.profileOwnerTotalFollowers - 1,
			};
		case "INCREMENT_PROFILE_OWNER_TOTAL_FOLLOWINGS":
			return {
				...state,
				profileOwnerTotalFollowings: state.profileOwnerTotalFollowings + 1,
			};
		case "DECREMENT_PROFILE_OWNER_TOTAL_FOLLOWINGS":
			return {
				...state,
				profileOwnerTotalFollowings: state.profileOwnerTotalFollowings - 1,
			};
		default:
			return state;
	}
};

export default userProfileReducer;
