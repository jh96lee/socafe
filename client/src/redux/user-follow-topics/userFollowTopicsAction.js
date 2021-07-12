import axios from "axios";

import { setUserRegisterStepIndex } from "../user-register/user-register-step/userRegisterStepAction";

import { fetchToken } from "../../utils/cookie/fetchToken";
import { setCoupleSeconds } from "../../utils/setCoupleSeconds";

const startFetchingTopics = () => ({
	type: "START_FETCHING_TOPICS",
});

const fetchedTopics = (topics) => ({
	type: "FETCHED_TOPICS",
	payload: topics,
});

const endFetchingTopics = () => ({
	type: "END_FETCHING_TOPICS",
});

const startSubmittingTopicsToFollow = () => ({
	type: "START_SUBMITTING_TOPICS_TO_FOLLOW",
});

const endSubmittingTopicsToFollow = () => ({
	type: "END_SUBMITTING_TOPICS_TO_FOLLOW",
});

const setUserFollowTopicsSuccessMessage = (successMessage) => ({
	type: "SET_USER_FOLLOW_TOPICS_SUCCESS_MESSAGE",
	payload: successMessage,
});

const setUserFollowTopicsErrorMessage = (errorMessageObject) => ({
	type: "SET_USER_FOLLOW_TOPICS_ERROR_MESSAGE",
	payload: errorMessageObject,
});

export const fetchTopics = () => async (dispatch) => {
	dispatch(startFetchingTopics());

	try {
		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/topic/following/all-topics",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (error) {
			dispatch(endFetchingTopics());

			dispatch(setUserFollowTopicsErrorMessage(error));
		} else {
			dispatch(fetchedTopics(data));

			dispatch(endFetchingTopics());
		}
	} catch (error) {
		dispatch(endFetchingTopics());

		dispatch(setUserFollowTopicsErrorMessage(error));
	}
};

export const submitTopicsToFollow =
	(topicsToFollowArray) => async (dispatch) => {
		dispatch(startSubmittingTopicsToFollow());

		try {
			const token = fetchToken();

			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/topic/follow",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				data: {
					topicsToFollowArray,
				},
			});

			const { success, error } = data;

			if (error) {
				dispatch(endSubmittingTopicsToFollow());

				dispatch(setUserFollowTopicsErrorMessage(error));
			} else if (success) {
				dispatch(endSubmittingTopicsToFollow());

				dispatch(setUserFollowTopicsSuccessMessage(success));

				// FIX: situational
				setCoupleSeconds(() => {
					dispatch(setUserRegisterStepIndex(2));
				}, 1500);
			}
		} catch (error) {
			dispatch(endSubmittingTopicsToFollow());

			dispatch(setUserFollowTopicsErrorMessage(error));
		}
	};