import axios from "axios";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const startFetchingHomeFeedNotifications = () => ({
	type: "START_FETCHING_HOME_FEED_NOTIFICATIONS",
});

const fetchedHomeFeedNotifications = (notifications) => ({
	type: "FETCHED_HOME_FEED_NOTIFICATIONS",
	payload: notifications,
});

const endFetchingHomeFeedNotifications = () => ({
	type: "END_FETCHING_HOME_FEED_NOTIFICATIONS",
});

export const fetchHomeFeedNotifications = () => async (dispatch) => {
	dispatch(startFetchingHomeFeedNotifications());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/notification/feed",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const { error } = data;

	if (!error) {
		dispatch(fetchedHomeFeedNotifications(data));

		dispatch(endFetchingHomeFeedNotifications());
	}
};
