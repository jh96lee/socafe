import axios from "axios";

const startFetchingExploreTopics = () => ({
	type: "START_FETCHING_EXPLORE_TOPICS",
});

const fetchedExploreTopics = (topics) => ({
	type: "FETCHED_EXPLORE_TOPICS",
	payload: topics,
});

const endFetchingExploreTopics = () => ({
	type: "END_FETCHING_EXPLORE_TOPICS",
});

export const fetchedExplorePosts = (explorePosts) => ({
	type: "FETCHED_EXPLORE_POSTS",
	payload: explorePosts,
});

export const fetchedExtraExplorePosts = (extraExplorePosts) => ({
	type: "FETCHED_EXTRA_EXPLORE_POSTS",
	payload: extraExplorePosts,
});

export const setExploreNextAPIEndpoint = (nextAPIEndpoint) => ({
	type: "SET_EXPLORE_NEXT_API_ENDPOINT",
	payload: nextAPIEndpoint,
});

export const setSelectedExploreTopicID = (id) => ({
	type: "SET_SELECTED_EXPLORE_TOPIC_ID",
	payload: id,
});

export const fetchExploreTopics = () => async (dispatch) => {
	dispatch(startFetchingExploreTopics());

	try {
		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/topic/explore",
		});

		const { error } = data;

		if (!error) {
			dispatch(fetchedExploreTopics(data));
		}

		dispatch(endFetchingExploreTopics());
	} catch (error) {
		dispatch(endFetchingExploreTopics());
	}
};
