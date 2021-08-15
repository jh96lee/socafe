const initialState = {
	isTextAdded: false,
	storyTextsArray: [1],
};

const storyTextsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_TEXT_ADDED":
			return {
				...state,
				isTextAdded: !state.isTextAdded,
			};
		case "SET_STORY_TEXTS_ARRAY":
			return {
				...state,
				storyTextsArray: [
					...state.storyTextsArray,
					state.storyTextsArray[state.storyTextsArray.length - 1] + 1,
				],
			};
		default:
			return state;
	}
};

export default storyTextsReducer;
