const initialState = {
	userProfilePosts: [],
	isUserProfilePostsLoading: false,
};

const userProfilePostsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_USER_PROFILE_POSTS":
			return {
				...state,
				isUserProfilePostsLoading: true,
			};
		case "FETCHED_USER_PROFILE_POSTS":
			return {
				...state,
				userProfilePosts: action.payload,
			};
		case "END_FETCHING_USER_PROFILE_POSTS":
			return {
				...state,
				isUserProfilePostsLoading: false,
			};
		default:
			return state;
	}
};

export default userProfilePostsReducer;
