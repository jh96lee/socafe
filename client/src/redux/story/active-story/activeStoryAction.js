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

export const fetchActiveStory = (storyID, userID) => async (dispatch) => {
	dispatch(startFetchingActiveStory());

	try {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/story/${storyID}/${userID}`,
		});

		const { error } = data;

		if (!error) {
			dispatch(fetchedActiveStory(data));
		}

		dispatch(endFetchingActiveStory());
	} catch (error) {
		dispatch(endFetchingActiveStory());
	}
};
