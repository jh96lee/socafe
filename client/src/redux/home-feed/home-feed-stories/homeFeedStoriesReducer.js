const initialState = {
	// REVIEW: this will get displayed at HomePage
	homeFeedStories: [],
	isHomeFeedStoriesLoaded: false,
	// REVIEW: selected user and story object at homefeed
	selectedUserStoriesIndex: null,
};

const storyViewershipReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_HOME_FEED_STORIES":
			return {
				...state,
				isHomeFeedStoriesLoaded: false,
			};
		case "FETCHED_HOME_FEED_STORIES":
			return {
				...state,
				homeFeedStories: action.payload,
			};
		case "END_FETCHING_HOME_FEED_STORIES":
			return {
				...state,
				isHomeFeedStoriesLoaded: true,
			};
		case "SET_SELECTED_USER_STORIES_INDEX":
			return {
				...state,
				selectedUserStoriesIndex: action.payload,
			};
		case "SET_TO_NEXT_SELECTED_USER_STORIES_INDEX":
			return {
				...state,
				selectedUserStoriesIndex: state.selectedUserStoriesIndex + 1,
			};

		default:
			return state;
	}
};

export default storyViewershipReducer;
