const initialState = {
	homeFeedStoriesArray: null,
	homeFeedStoriesErrorMessage: null,
	homeFeedStoriesNextAPIEndpoint: "",
};

const homeFeedStoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCHED_HOME_FEED_STORIES_ARRAY":
			return {
				...state,
				homeFeedStoriesArray: action.payload,
			};
		case "FETCHED_EXTRA_HOME_FEED_STORIES_ARRAY":
			return {
				...state,
				homeFeedStoriesArray: [
					...state.homeFeedStoriesArray,
					...action.payload,
				],
			};
		case "SET_HOME_FEED_STORIES_NEXT_API_ENDPOINT":
			return {
				...state,
				homeFeedStoriesNextAPIEndpoint: action.payload,
			};
		case "SET_HOME_FEED_STORIES_ARRAY_ERROR_MESSAGE":
			return {
				...state,
				homeFeedStoriesErrorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default homeFeedStoriesReducer;
