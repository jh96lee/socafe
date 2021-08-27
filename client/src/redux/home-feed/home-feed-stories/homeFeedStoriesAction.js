import axios from "axios";

export const fetchedHomeFeedStoriesArray = (storiesArray) => ({
	type: "FETCHED_HOME_FEED_STORIES_ARRAY",
	payload: storiesArray,
});

export const fetchedExtraHomeFeedStoriesArray = (extraStoriesArray) => ({
	type: "FETCHED_EXTRA_HOME_FEED_STORIES_ARRAY",
	payload: extraStoriesArray,
});

export const setHomeFeedStoriesNextAPIEndpoint = (apiEndpoint) => ({
	type: "SET_HOME_FEED_STORIES_NEXT_API_ENDPOINT",
	payload: apiEndpoint,
});

export const setHomeFeedStoriesArrayErrorMessage = (errorMessage) => ({
	type: "SET_HOME_FEED_STORIES_ARRAY_ERROR_MESSAGE",
	payload: errorMessage,
});

// REVIEW: this is triggered when homeFeedStoriesArray does not exist
// REVIEW: which is when the user refreshes a page, or directly entered in a story rendering URL
export const fetchCurrentUserStories = (userID) => async (dispatch) => {
	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/story/stories/${userID}`,
	});

	const { error } = data;

	if (!error) {
		dispatch(fetchedHomeFeedStoriesArray([data]));
	} else {
		dispatch(setHomeFeedStoriesArrayErrorMessage(error));
	}
};
