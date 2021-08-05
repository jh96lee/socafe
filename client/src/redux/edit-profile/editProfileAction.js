import axios from "axios";

import { fetchToken } from "../../utils/cookie/fetchToken";

const startFetchingProfileToEdit = () => ({
	type: "START_FETCHING_PROFILE_TO_EDIT",
});

const fetchedProfileToEdit = (profile) => ({
	type: "FETCHED_PROFILE_TO_EDIT",
	payload: profile,
});

const endFetchingProfileToEdit = () => ({
	type: "END_FETCHING_PROFILE_TO_EDIT",
});

export const fetchUserProfileToEdit = () => async (dispatch) => {
	dispatch(startFetchingProfileToEdit());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/edit/profile",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	dispatch(fetchedProfileToEdit(data));

	dispatch(endFetchingProfileToEdit());
};
