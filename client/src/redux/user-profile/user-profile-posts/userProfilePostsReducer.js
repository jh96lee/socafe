const initialState = {
	userProfilePosts: [],
	isUserProfilePostsLoaded: false,
};

const userProfilePostsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_USER_PROFILE_POSTS":
			return {
				...state,
				isUserProfilePostsLoaded: false,
			};
		case "FETCHED_USER_PROFILE_POSTS":
			return {
				...state,
				userProfilePosts: action.payload,
			};
		case "END_FETCHING_USER_PROFILE_POSTS":
			return {
				...state,
				isUserProfilePostsLoaded: true,
			};
		default:
			return state;
	}
};

export default userProfilePostsReducer;
