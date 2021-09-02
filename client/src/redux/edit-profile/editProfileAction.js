import axios from "axios";

import { setUser } from "../user/userAction";

import { fetchToken } from "../../utils/cookie/fetchToken";
import { setCookie } from "../../utils/cookie/setCookie";

const startFetchingInitialProfile = () => ({
	type: "START_FETCHING_INITIAL_PROFILE",
});

const fetchedInitialProfile = (initialProfile) => ({
	type: "FETCHED_INITIAL_PROFILE",
	payload: initialProfile,
});

const endFetchingInitialProfile = () => ({
	type: "END_FETCHING_INITIAL_PROFILE",
});

export const setEditedFormData = (editedForm) => ({
	type: "SET_EDITED_FORM_DATA",
	payload: editedForm,
});

export const setEditedBioNodesArray = (nodesArray) => ({
	type: "SET_EDITED_BIO_NODES_ARRAY",
	payload: nodesArray,
});

export const setEditProfileSuccessMessage = (successMessage) => ({
	type: "SET_EDIT_PROFILE_SUCCESS_MESSAGE",
	payload: successMessage,
});

export const setEditProfileErrorMessage = (errorMessage) => ({
	type: "SET_EDIT_PROFILE_ERROR_MESSAGE",
	payload: errorMessage,
});

const resetEditedData = () => ({
	type: "RESET_EDITED_DATA",
});

export const resetEditProfile = () => ({
	type: "RESET_EDIT_PROFILE",
});

// TODO: fetch initial profile data
export const fetchInitialProfile = () => async (dispatch) => {
	dispatch(startFetchingInitialProfile());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/profile/edit",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const {
		id,
		username,
		full_name: fullName,
		email,
		bio_nodes_array: bioNodesArray,
	} = data;

	if (data) {
		dispatch(
			fetchedInitialProfile({
				id,
				username,
				fullName,
				email,
				bioNodesArray,
			})
		);

		dispatch(endFetchingInitialProfile());
	} else {
		dispatch(endFetchingInitialProfile());
	}
};

// TODO: update general form data
export const updateProfile = () => async (dispatch, getState) => {
	const { editedFullName, editedUsername, editedEmail, editedBioNodesArray } =
		getState().editProfileReducer;

	const { data } = await axios({
		method: "PUT",
		url: "http://localhost:8080/profile/edit",
		data: {
			fullName: editedFullName,
			username: editedUsername,
			email: editedEmail,
			bioNodesArray: editedBioNodesArray,
		},
		headers: {
			Authorization: `Bearer ${fetchToken()}`,
		},
	});

	const { success, error } = data;

	if (error) {
		dispatch(setEditProfileErrorMessage(error));
	} else {
		const { token } = data;

		dispatch(setEditProfileSuccessMessage(success));

		setCookie("token", token);

		dispatch(setUser());

		dispatch(resetEditedData());
	}
};
