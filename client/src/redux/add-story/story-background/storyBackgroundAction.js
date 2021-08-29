import axios from "axios";

const startFetchingStoryBackgrounds = () => ({
	type: "START_FETCHING_STORY_BACKGROUNDS",
});

const fetchedStoryBackgrounds = (backgrounds) => ({
	type: "FETCHED_STORY_BACKGROUNDS",
	payload: backgrounds,
});

const endFetchingStoryBackgrounds = () => ({
	type: "END_FETCHING_STORY_BACKGROUNDS",
});

export const setSelectedStoryBackground = (backgroundObject) => ({
	type: "SET_SELECTED_STORY_BACKGROUND",
	payload: backgroundObject,
});

export const setSelectedStoryBackgroundIndex = (index) => ({
	type: "SET_SELECTED_STORY_BACKGROUND_INDEX",
	payload: index,
});

export const fetchStoryBackgrounds = () => async (dispatch) => {
	dispatch(startFetchingStoryBackgrounds());

	try {
		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/story/backgrounds",
		});

		const { error } = data;

		if (!error) {
			dispatch(fetchedStoryBackgrounds(data));
		}

		dispatch(endFetchingStoryBackgrounds());
	} catch (error) {
		dispatch(endFetchingStoryBackgrounds());
	}
};
