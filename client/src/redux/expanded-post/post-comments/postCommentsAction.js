import axios from "axios";

import { fetchToken } from "../../utils";

export const setPostCommentsPage = () => ({
	type: "SET_POST_COMMENTS_PAGE",
});

const startFetchingPostComments = () => ({
	type: "START_FETCHING_POST_COMMENTS",
});

const fetchedPostComments = (comments) => ({
	type: "FETCHED_POST_COMMENTS",
	payload: comments,
});

const endFetchingPostComments = () => ({
	type: "END_FETCHING_POST_COMMENTS",
});

const startFetchingExtraPostComments = () => ({
	type: "START_FETCHING_EXTRA_POST_COMMENTS",
});

export const fetchedExtraPostComments = (extraPostComments) => ({
	type: "FETCHED_EXTRA_POST_COMMENTS",
	payload: extraPostComments,
});

const endFetchingExtraPostComments = () => ({
	type: "END_FETCHING_EXTRA_POST_COMMENTS",
});

export const setPostCommentsNextAPIEndpoint = (nextApiEndpoint) => ({
	type: "SET_POST_COMMENTS_NEXT_API_ENDPOINT",
	payload: nextApiEndpoint,
});

export const addNewPostComment = (newComment) => ({
	type: "ADD_NEW_POST_COMMENT",
	payload: newComment,
});

export const removePostComment = (commentID) => ({
	type: "REMOVE_POST_COMMENT",
	payload: commentID,
});

export const resetPostcomments = () => ({
	type: "RESET_POST_COMMENTS",
});

export const fetchPostComments =
	(pageSize, apiEndpoint) => async (dispatch) => {
		dispatch(startFetchingPostComments());

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080${apiEndpoint}?page=1&size=${pageSize}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error, contents, next } = data;

		if (!error) {
			dispatch(fetchedPostComments(contents));

			dispatch(setPostCommentsNextAPIEndpoint(next));

			dispatch(endFetchingPostComments());
		}
	};

export const fetchExtraPostComments = (nextAPIEndpoint) => async (dispatch) => {
	dispatch(startFetchingExtraPostComments());

	const token = fetchToken();

	const { data } = await axios({
		method: "GET",
		url: `http://localhost:8080${nextAPIEndpoint}`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const { error, contents, next } = data;

	if (!error) {
		dispatch(fetchedExtraPostComments(contents));

		dispatch(setPostCommentsNextAPIEndpoint(next));

		dispatch(endFetchingExtraPostComments());
	}
};
