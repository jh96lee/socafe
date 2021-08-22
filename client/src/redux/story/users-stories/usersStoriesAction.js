import axios from "axios";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const startFetchingUsersStoriesArray = () => ({
	type: "START_FETCHING_USERS_STORIES_ARRAY",
});

export const fetchedUsersStoriesArray = (storiesArray) => ({
	type: "FETCHED_USERS_STORIES_ARRAY",
	payload: storiesArray,
});

export const fetchedExtraUsersStoriesArray = (extraStoriesArray) => ({
	type: "FETCHED_EXTRA_USERS_STORIES_ARRAY",
	payload: extraStoriesArray,
});

const endFetchingUsersStoriesArray = () => ({
	type: "END_FETCHING_USERS_STORIES_ARRAY",
});

export const setUsersStoriesNextAPIEndpoint = (apiEndpoint) => ({
	type: "SET_USERS_STORIES_NEXT_API_ENDPOINT",
	payload: apiEndpoint,
});

export const setSelectedUserStoriesIndex = (index) => ({
	type: "SET_SELECTED_USER_STORIES_INDEX",
	payload: index,
});

export const setUserStoryIDsArray = (storyIDsArray) => ({
	type: "SET_USER_STORY_IDS_ARRAY",
	payload: storyIDsArray,
});

export const setActiveUserStoryIndex = (index) => ({
	type: "SET_ACTIVE_USER_STORY_INDEX",
	payload: index,
});

// REVIEW: this is to set usersStoriesArray when a user refreshes story page or enters a story page url
export const setUsersStoriesArray = (storiesArray) => ({
	type: "SET_USERS_STORIES_ARRAY",
	payload: storiesArray,
});

const setUsersStoriesErrorMessage = (errorMessage) => ({
	type: "SET_USERS_STORIES_ERROR_MESSAGE",
	payload: errorMessage,
});

export const fetchUsersStoriesArray = () => async (dispatch) => {
	dispatch(startFetchingUsersStoriesArray());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/story/feed",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const { error } = data;

	if (!error) {
		dispatch(fetchedUsersStoriesArray(data));
	}

	dispatch(endFetchingUsersStoriesArray());
};

export const fetchSpecificUserStoriesArray = (userID) => async (dispatch) => {
	dispatch(startFetchingUsersStoriesArray());

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/story/stories/${userID}`,
	});

	const { error } = data;

	if (!error) {
		dispatch(fetchedUsersStoriesArray([data]));
	} else {
		dispatch(setUsersStoriesErrorMessage(error));
	}

	dispatch(endFetchingUsersStoriesArray());
};
