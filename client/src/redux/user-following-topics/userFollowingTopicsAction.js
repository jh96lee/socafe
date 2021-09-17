import axios from "axios";

import { fetchToken } from "../../utils";

const startFetchingFollowingTopics = () => ({
	type: "START_FETCHING_FOLLOWING_TOPICS",
});

const fetchedFollowingTopics = (followingTopics) => ({
	type: "FETCHED_FOLLOWING_TOPICS",
	payload: followingTopics,
});

const endFetchingFollowingTopics = () => ({
	type: "END_FETCHING_FOLLOWING_TOPICS",
});

export const removeFollowingTopic = (topicID) => ({
	type: "REMOVE_FOLLOWING_TOPIC",
	payload: topicID,
});

export const addFollowingTopic = (topic) => ({
	type: "ADD_FOLLOWING_TOPIC",
	payload: topic,
});

export const fetchFollowingTopics = () => async (dispatch) => {
	dispatch(startFetchingFollowingTopics());

	try {
		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/topic/following/following-topics",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (error) {
			dispatch(endFetchingFollowingTopics());
		} else {
			dispatch(fetchedFollowingTopics(data));

			dispatch(endFetchingFollowingTopics());
		}
	} catch (error) {
		dispatch(endFetchingFollowingTopics());
	}
};
