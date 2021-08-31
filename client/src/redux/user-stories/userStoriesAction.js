export const fetchedUserStories = (stories) => ({
	type: "FETCHED_USER_STORIES",
	payload: stories,
});

export const fetchedExtraUserStories = (stories) => ({
	type: "FETCHED_EXTRA_USER_STORIES",
	payload: stories,
});

export const setSelectedUserStoryIndex = (index) => ({
	type: "SET_SELECTED_USER_STORY_INDEX",
	payload: index,
});

export const setUserStoriesNextAPIEndpoint = (apiEndpoint) => ({
	type: "SET_USER_STORIES_NEXT_API_ENDPOINT",
	payload: apiEndpoint,
});

export const removeUserStory = (storyID) => ({
	type: "REMOVE_USER_STORY",
	payload: storyID,
});
