export const setActiveStoryIndex = (index) => ({
	type: "SET_ACTIVE_STORY_INDEX",
	payload: index,
});

export const setToPreviousActiveStoryIndex = () => ({
	type: "SET_TO_PREVIOUS_ACTIVE_STORY_INDEX",
});

export const setToNextActiveStoryIndex = () => ({
	type: "SET_TO_NEXT_ACTIVE_STORY_INDEX",
});

export const setUserStoryIDsArray = (storyIDsArray) => ({
	type: "SET_USER_STORY_IDS_ARRAY",
	payload: storyIDsArray,
});
