const initialState = {
	usersStoriesArray: null,
	isUsersStoriesArrayLoaded: false,
	selectedUserStoriesIndex: null,
	userStoryIDsArray: null,
	// REVIEW: this value is to properly render out the progress bar
	activeUserStoryIndex: null,
	usersStoriesErrorMessage: null,
};

const usersStoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_USERS_STORIES_ARRAY":
			return {
				...state,
				isUsersStoriesArrayLoaded: false,
			};
		case "SET_USERS_STORIES_ARRAY":
			return {
				...state,
				usersStoriesArray: action.payload,
			};
		case "FETCHED_USERS_STORIES_ARRAY":
			return {
				...state,
				usersStoriesArray: action.payload,
			};
		case "END_FETCHING_USERS_STORIES_ARRAY":
			return {
				...state,
				isUsersStoriesArrayLoaded: true,
			};
		case "SET_SELECTED_USER_STORIES_INDEX":
			return {
				...state,
				selectedUserStoriesIndex: action.payload,
			};
		case "SET_USER_STORY_IDS_ARRAY":
			return {
				...state,
				userStoryIDsArray: action.payload,
			};
		case "SET_ACTIVE_USER_STORY_INDEX":
			return {
				...state,
				activeUserStoryIndex: action.payload,
			};
		case "SET_USERS_STORIES_ERROR_MESSAGE":
			return {
				...state,
				usersStoriesErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default usersStoriesReducer;
