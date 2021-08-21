const initialState = {
	// REVIEW: currently active story that the user is viewing
	activeStoryIndex: null,
	// TODO: this is used when storyViewshipArray is empty (when user reloads or enters story URL)
	userStoryIDsArray: null,
};

const storyViewershipReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_ACTIVE_STORY_INDEX":
			return {
				...state,
				activeStoryIndex: action.payload,
			};
		case "SET_TO_PREVIOUS_ACTIVE_STORY_INDEX":
			return {
				...state,
				activeStoryIndex: state.activeStoryIndex - 1,
			};
		case "SET_TO_NEXT_ACTIVE_STORY_INDEX":
			return {
				...state,
				activeStoryIndex: state.activeStoryIndex + 1,
			};
		case "SET_USER_STORY_IDS_ARRAY":
			return {
				...state,
				userStoryIDsArray: action.payload,
			};
		default:
			return state;
	}
};

export default storyViewershipReducer;
