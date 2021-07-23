import axios from "axios";

const startFetchingMyParentComments = () => ({
	type: "START_FETCHING_MY_PARENT_COMMENTS",
});

const fetchedMyParentComments = (myParentCommentsArray) => ({
	type: "FETCHED_MY_PARENT_COMMENTS",
	payload: myParentCommentsArray,
});

const endFetchingMyParentComments = () => ({
	type: "END_FETCHING_MY_PARENT_COMMENTS",
});

export const addNewMyParentComment = (parentComment) => ({
	type: "ADD_NEW_MY_PARENT_COMMENT",
	payload: parentComment,
});

export const removeMyParentComment = (commentID) => ({
	type: "REMOVE_MY_PARENT_COMMENT",
	payload: commentID,
});

export const fetchMyParentComments = (userID, postID) => async (dispatch) => {
	dispatch(startFetchingMyParentComments());

	try {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/comment/my/${userID}/${postID}`,
		});

		const { error } = data;

		if (error) {
			dispatch(endFetchingMyParentComments());
		} else {
			dispatch(fetchedMyParentComments(data));

			dispatch(endFetchingMyParentComments());
		}
	} catch (error) {
		dispatch(endFetchingMyParentComments());
	}
};
