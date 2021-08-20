const initialState = {
	// REVIEW: this will get displayed at HomePage
	homeFeedStories: [],
	isHomeFeedStoriesLoaded: false,
	// REVIEW: selected user and story object at homefeed
	clickedHomeFeedUserIndex: null,
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
		default:
			return state;
	}
};

export default storyViewershipReducer;
