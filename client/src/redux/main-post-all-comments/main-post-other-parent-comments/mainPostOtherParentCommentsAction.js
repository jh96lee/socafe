import axios from "axios";

const startFetchingOtherParentComments = () => ({
	type: "START_FETCHING_OTHER_PARENT_COMMENTS",
});

const fetchedOtherParentComments = (myParentCommentsArray) => ({
	type: "FETCHED_OTHER_PARENT_COMMENTS",
	payload: myParentCommentsArray,
});

const endFetchingOtherParentComments = () => ({
	type: "END_FETCHING_OTHER_PARENT_COMMENTS",
});

export const fetchOtherParentComments =
	(userID, postID) => async (dispatch) => {
		dispatch(startFetchingOtherParentComments());

		try {
			const { data } = await axios({
				method: "GET",
				url: `http://localhost:8080/comment/parent/other/${userID}/${postID}`,
			});

			const { error } = data;

			if (error) {
				dispatch(endFetchingOtherParentComments());
			} else {
				dispatch(fetchedOtherParentComments(data));

				dispatch(endFetchingOtherParentComments());
			}
		} catch (error) {
			dispatch(endFetchingOtherParentComments());
		}
	};
