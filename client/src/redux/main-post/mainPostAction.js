import axios from "axios";

const startFetchingMainPost = () => ({
	type: "START_FETCHING_MAIN_POST",
});

const fetchedMainPost = (mainPostDataObject) => ({
	type: "FETCHED_MAIN_POST",
	payload: mainPostDataObject,
});

const endFetchingMainPost = () => ({
	type: "END_FETCHING_MAIN_POST",
});

export const fetchMainPost = (postID, userID) => async (dispatch, getState) => {
	dispatch(startFetchingMainPost());

	try {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/post/${postID}/${userID}`,
		});

		const { error } = data;

		if (error) {
			dispatch(endFetchingMainPost());
		} else {
			dispatch(fetchedMainPost(data));

			dispatch(endFetchingMainPost());
		}
	} catch (error) {
		dispatch(endFetchingMainPost());
	}
};
