import axios from "axios";

import { fetchToken } from "../../../utils";

export const setCurrentAllNotificationsPage = () => ({
	type: "SET_CURRENT_ALL_NOTIFICATIONS_PAGE",
});

const startFetchingAllNotifications = () => ({
	type: "START_FETCHING_ALL_NOTIFICATIONS",
});

const fetchedAllNotifications = (notifications) => ({
	type: "FETCHED_ALL_NOTIFICATIONS",
	payload: notifications,
});

const endFetchingAllNotifications = () => ({
	type: "END_FETCHING_ALL_NOTIFICATIONS",
});

const startFetchingExtraAllNotifications = () => ({
	type: "START_FETCHING_EXTRA_ALL_NOTIFICATIONS",
});

const fetchedExtraAllNotifications = (notifications) => ({
	type: "FETCHED_EXTRA_ALL_NOTIFICATIONS",
	payload: notifications,
});

const endFetchingExtraAllNotifications = () => ({
	type: "END_FETCHING_EXTRA_ALL_NOTIFICATIONS",
});

const setAllNotificationsNextAPIEndpoint = (apiEndpoint) => ({
	type: "SET_ALL_NOTIFICATIONS_NEXT_API_ENDPOINT",
	payload: apiEndpoint,
});

export const resetAllNotifications = () => ({
	type: "RESET_ALL_NOTIFICATIONS",
});

export const fetchAllNotifications =
	(pageSize, customQueryString = "") =>
	async (dispatch) => {
		dispatch(startFetchingAllNotifications());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/notification/user?page=1&size=${pageSize}&${customQueryString}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, contents, next } = data;

		if (!error) {
			dispatch(fetchedAllNotifications(contents));

			dispatch(setAllNotificationsNextAPIEndpoint(next));

			dispatch(endFetchingAllNotifications());
		}
	};

export const fetchExtraAllNotifications =
	(nextAPIEndpoint, customQueryString = "") =>
	async (dispatch) => {
		dispatch(startFetchingExtraAllNotifications());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080${nextAPIEndpoint}${customQueryString}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, contents, next } = data;

		if (!error) {
			dispatch(fetchedExtraAllNotifications(contents));

			dispatch(setAllNotificationsNextAPIEndpoint(next));

			dispatch(endFetchingExtraAllNotifications());
		}
	};
