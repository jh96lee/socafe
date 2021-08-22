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

const setActiveStoryErrorMessage = (errorMessage) => ({
	type: "SET_ACTIVE_STORY_ERROR_MESSAGE",
	payload: errorMessage,
});

export const fetchActiveStory =
	(storyID, ownerID, visitorID) => async (dispatch) => {
		dispatch(startFetchingActiveStory());

		try {
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:8080/story/${storyID}/${ownerID}/${visitorID}`,
			});

			const { error } = data;

			if (!error) {
				dispatch(fetchedActiveStory(data));
			} else {
				dispatch(setActiveStoryErrorMessage(error));
			}

			dispatch(endFetchingActiveStory());
		} catch (error) {
			dispatch(endFetchingActiveStory());
		}
	};
