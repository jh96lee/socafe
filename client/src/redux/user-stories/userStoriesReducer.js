const initialState = {
	userStoriesArray: [],
	userStoriesNextAPIEndpoint: "",
	selectedUserStoryIndex: null,
};

const userStoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCHED_USER_STORIES":
			return {
				...state,
				userStoriesArray: action.payload,
			};
		case "FETCHED_EXTRA_USER_STORIES":
			return {
				...state,
				userStoriesArray: [...state.userStoriesArray, ...action.payload],
			};
		case "SET_SELECTED_USER_STORY_INDEX":
			return {
				...state,
				selectedUserStoryIndex: action.payload,
			};
		case "SET_USER_STORIES_NEXT_API_ENDPOINT":
			return {
				...state,
				userStoriesNextAPIEndpoint: action.payload,
			};
		case "REMOVE_USER_STORY":
			return {
				...state,
				userStoriesArray: state.userStoriesArray.filter(
					(story) => story.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export default userStoriesReducer;
