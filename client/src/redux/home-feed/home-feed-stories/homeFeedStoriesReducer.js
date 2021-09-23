const initialState = {
	currentHomeFeedStoriesPage: 1,
	isHomeFeedStoriesLoaded: false,
	isExtraHomeFeedStoriesLoading: false,
	homeFeedStories: [],
	homeFeedStoriesNextAPIEndpoint: "",
};

const homeFeedStoriesReducer = (state = initialState, action) => {
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
		case "START_FETCHING_EXTRA_HOME_FEED_STORIES":
			return {
				...state,
				isExtraHomeFeedStoriesLoading: true,
			};
		case "FETCHED_EXTRA_HOME_FEED_STORIES":
			return {
				...state,
				homeFeedStories: [...state.homeFeedStories, ...action.payload],
			};
		case "END_FETCHING_EXTRA_HOME_FEED_STORIES":
			return {
				...state,
				isExtraHomeFeedStoriesLoading: false,
			};
		case "SET_HOME_FEED_STORIES_NEXT_API_ENDPOINT":
			return {
				...state,
				homeFeedStoriesNextAPIEndpoint: action.payload,
			};
		case "SET_HOME_FEED_STORIES_PAGE":
			return {
				...state,
				currentHomeFeedStoriesPage: state.currentHomeFeedStoriesPage + 1,
			};
		case "RESET_HOME_FEED_STORIES":
			return initialState;
		default:
			return state;
	}
};

export default homeFeedStoriesReducer;
