import axios from "axios";

import { fetchToken } from "../../../utils";

const startFetchingContentViewsArray = () => ({
	type: "START_FETCHING_CONTENT_VIEWS_ARRAY",
});

const fetchedContentViewsArray = (contentViewsArray) => ({
	type: "FETCHED_CONTENT_VIEWS_ARRAY",
	payload: contentViewsArray,
});

const endFetchingContentViewsArray = () => ({
	type: "END_FETCHING_CONTENT_VIEWS_ARRAY",
});

export const setGraphArrays = (graphArraysObject) => ({
	type: "SET_GRAPH_ARRAYS",
	payload: graphArraysObject,
});

export const setNDaysAgo = (nDays) => ({
	type: "SET_N_DAYS_AGO",
	payload: nDays,
});

export const setContentType = (contentType) => ({
	type: "SET_CONTENT_TYPE",
	payload: contentType,
});

export const fetchContentViewsArray =
	(contentType, nDaysAgo) => async (dispatch) => {
		dispatch(startFetchingContentViewsArray());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/user/stats/views/${contentType}/${nDaysAgo}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			dispatch(fetchedContentViewsArray(data));
		}

		dispatch(endFetchingContentViewsArray());
	};
