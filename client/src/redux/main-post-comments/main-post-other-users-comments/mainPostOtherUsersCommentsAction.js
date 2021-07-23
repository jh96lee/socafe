import axios from "axios";

const startFetchingOtherUsersComments = () => ({
	type: "START_FETCHING_OTHER_USERS_COMMENTS",
});

const fetchedOtherUsersComments = (myParentCommentsArray) => ({
	type: "FETCHED_OTHER_USERS_COMMENTS",
	payload: myParentCommentsArray,
});

const endFetchingOtherUsersComments = () => ({
	type: "END_FETCHING_OTHER_USERS_COMMENTS",
});

export const fetchOtherUsersComments = (userID, postID) => async (dispatch) => {
	dispatch(startFetchingOtherUsersComments());

	try {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/comment/other/${userID}/${postID}`,
		});

		const { error } = data;

		if (error) {
			dispatch(endFetchingOtherUsersComments());
		} else {
			dispatch(fetchedOtherUsersComments(data));

			dispatch(endFetchingOtherUsersComments());
		}
	} catch (error) {
		dispatch(endFetchingOtherUsersComments());
	}
};
