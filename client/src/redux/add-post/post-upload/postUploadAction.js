import axios from "axios";

import { setPostImagesErrorMessage } from "../post-images/postImagesAction";
import { setPostCategoriesErrorMessage } from "../post-categories/postCategoriesAction";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const startUploadingPost = () => ({
	type: "START_UPLOADING_POST",
});

const uploadedPost = (postID) => ({
	type: "UPLOADED_POST",
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

export const uploadPost =
	(
		postImagesArray,
		postCategoriesArray,
		postTaggedUsersArray,
		postNodesArray
	) =>
	async (dispatch) => {
		if (postImagesArray.length === 0) {
			dispatch(setPostImagesErrorMessage("At least 1 image must be uploaded"));
		}

		if (postCategoriesArray.length === 0) {
			dispatch(
				setPostCategoriesErrorMessage("At least 1 category must be selected")
			);
		}

		if (postImagesArray.length > 0 || postCategoriesArray.length > 0) {
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
					postCategoriesArray,
					postTaggedUsersArray,
					postNodesArray,
				},
			});

			const { postID, success, error } = data;

			if (postID && success) {
				dispatch(setPostUploadSuccessMessage(success));

				dispatch(uploadedPost(postID));

				dispatch(endUploadingPost());
			} else {
				dispatch(setPostUploadErrorMessage(error));

				dispatch(endUploadingPost());
			}
		}
	};
