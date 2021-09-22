import axios from "axios";

const startFetchingActiveStory = () => ({
	type: "START_FETCHING_ACTIVE_STORY",
});

const fetchedActiveStory = (story) => ({
	type: "FETCHED_ACTIVE_STORY",
	payload: story,
});

const endFetchingActiveStory = () => ({
	type: "END_FETCHING_ACTIVE_STORY",
});

export const fetchActiveStory = (storyID, ownerID) => async (dispatch) => {
	dispatch(startFetchingActiveStory());

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080/story/${storyID}/${ownerID}`,
	});

	const { error } = data;

	if (error) {
		dispatch(fetchedActiveStory(null));
	} else {
		dispatch(fetchedActiveStory(data));
	}

	dispatch(endFetchingActiveStory());
};
