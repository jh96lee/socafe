const initialState = {
	selectedUserStoriesIndex: null,
	// REVIEW: this value is to properly render out the progress bar
	activeUserStoryIndex: null,
};

const storyViewershipReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SELECTED_USER_STORIES_INDEX":
			return {
				...state,
				selectedUserStoriesIndex: action.payload,
			};
		case "SET_ACTIVE_USER_STORY_INDEX":
			return {
				...state,
				activeUserStoryIndex: action.payload,
			};
		default:
			return state;
	}
};

export default storyViewershipReducer;
