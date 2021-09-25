const initialState = {
	isHomeFeedUserSuggestionsLoaded: false,
	homeFeedUserSuggestions: [],
};

const homeFeedUserSuggestionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_HOME_FEED_USER_SUGGESTIONS":
			return {
				...state,
				isHomeFeedUserSuggestionsLoaded: false,
			};
		case "FETCHED_HOME_FEED_USER_SUGGESTIONS":
			return {
				...state,
				homeFeedUserSuggestions: action.payload,
			};
		case "END_FETCHING_HOME_FEED_USER_SUGGESTIONS":
			return {
				...state,
				isHomeFeedUserSuggestionsLoaded: true,
			};
		default:
			return state;
	}
};

export default homeFeedUserSuggestionsReducer;
