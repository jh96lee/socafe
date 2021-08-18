const initialState = {
	isStoryBackgroundsLoaded: false,
	storyBackgrounds: [],
	selectedStoryBackground: {},
};

const storyBackgroundReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_STORY_BACKGROUNDS":
			return {
				...state,
				isStoryBackgroundsLoaded: false,
			};
		case "FETCHED_STORY_BACKGROUNDS":
			return {
				...state,
				storyBackgrounds: action.payload,
			};
		case "END_FETCHING_STORY_BACKGROUNDS":
			return {
				...state,
				isStoryBackgroundsLoaded: true,
			};
		case "SET_SELECTED_STORY_BACKGROUND":
			return {
				...state,
				selectedStoryBackground: action.payload,
			};
		default:
			return state;
	}
};

export default storyBackgroundReducer;
