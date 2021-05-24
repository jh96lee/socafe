import axios from "axios";

export const fetchPostCategories = () => async (dispatch) => {
	dispatch({
		type: "START_FETCHING_POST_CATEGORIES",
	});

	const { data } = await axios({
		method: "GET",
		url: "http://localhost:8080/category/post",
	});

	dispatch({
		type: "FETCHED_POST_CATEGORIES",
		payload: data,
	});

	dispatch({
		type: "END_FETCHING_POST_CATEGORIES",
	});
};
