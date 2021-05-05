import axios from "axios";

import { registerNextStep } from "../register/registerAction";

import { fetchToken } from "../../utils/cookie";

export const fetchPostCategories = () => async (dispatch) => {
	dispatch({
		type: "START_FETCHING_POST_CATEGORIES",
	});

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/post_categories",
	});

	dispatch({
		type: "FETCHING_POST_CATEGORIES",
		payload: data,
	});

	dispatch({
		type: "END_FETCHING_POST_CATEGORIES",
	});
};

export const postCategoriesOfInterest = (selectedCategoriesArray) => async (
	dispatch
) => {
	const token = fetchToken();

	dispatch({
		type: "START_POSTING_CATEGORIES_OF_INTEREST",
	});

	const { data } = await axios({
		method: "POST",
		url: "http://localhost:8080/post_categories/interest",
		headers: { Authorization: `Bearer ${token}` },
		data: {
			categories: selectedCategoriesArray,
		},
	});

	dispatch({
		type: "POSTING_CATEGORIES_OF_INTEREST",
		payload: data,
	});

	dispatch({
		type: "END_POSTING_CATEGORIES_OF_INTEREST",
	});

	const { success, error } = data;

	if (error) {
		return;
	} else if (success) {
		dispatch(registerNextStep());
	}
};
