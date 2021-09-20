import axios from "axios";

import { fetchToken, removeTailEndBreakingPoints } from "../../../utils";

const startUploadingPost = () => ({
	type: "START_UPLOADING_POST",
});

const setUploadedPostID = (postID) => ({
	type: "SET_UPLOADED_POST_ID",
	payload: postID,
});

const endUploadingPost = () => ({
	type: "END_UPLOADING_POST",
});

const setPostUploadSuccessMessage = (message) => ({
	type: "SET_POST_UPLOAD_SUCCESS_MESSAGE",
	payload: message,
});

const setPostUploadErrorMessage = (message) => ({
	type: "SET_POST_UPLOAD_ERROR_MESSAGE",
	payload: message,
});

export const resetPostUpload = () => ({
	type: "RESET_POST_UPLOAD",
});

export const uploadPost =
	(postImagesArray, postTopicsArray, postTaggedUsersArray, postNodesArray) =>
	async (dispatch) => {
		if (postImagesArray.length > 0 && postTopicsArray.length > 0) {
			dispatch(startUploadingPost());

			const token = fetchToken();

			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/upload/post",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				data: {
					postImagesArray,
					postTopicsArray,
					postTaggedUsersArray,
					postNodesArray: removeTailEndBreakingPoints(postNodesArray),
				},
			});

			const { postID, success, error } = data;

			if (postID && success) {
				dispatch(setPostUploadSuccessMessage(success));

				dispatch(setUploadedPostID(postID));

				dispatch(endUploadingPost());
			} else {
				dispatch(setPostUploadErrorMessage(error));

				dispatch(endUploadingPost());
			}
		}
	};
