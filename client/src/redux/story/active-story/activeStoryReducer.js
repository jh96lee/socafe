const initialState = {
	activeStory: {},
	isActiveStoryLoaded: false,
};

const activeStoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_FETCHING_ACTIVE_STORY":
			return {
				...state,
				isActiveStoryLoaded: false,
			};
		case "FETCHED_ACTIVE_STORY":
			return {
				...state,
				activeStory: action.payload,
			};
		case "END_FETCHING_ACTIVE_STORY":
			return {
				...state,
				isActiveStoryLoaded: true,
			};
		default:
			return state;
	}
};

export default activeStoryReducer;
