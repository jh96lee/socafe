import axios from "axios";

import { setUploadImageErrorMessage } from "../upload-image/uploadImageAction";
import { resetUploadImage } from "../upload-image/uploadImageAction";

import { fetchToken } from "../../utils/cookie";
import { setCoupleSeconds } from "../../utils/setCoupleSeconds";

const setPostID = (postID) => ({
	type: "SET_POST_ID",
	payload: postID,
});

export const addPostCategory = (category) => ({
	type: "ADD_POST_CATEGORY",
	payload: category,
});

export const removePostCategory = (categoryID) => ({
	type: "REMOVE_POST_CATEGORY",
	payload: categoryID,
});

export const addUserOnPost = (user) => ({
	type: "ADD_USER_ON_POST",
	payload: user,
});

export const removeUserOnPost = (userID) => ({
	type: "REMOVE_USER_ON_POST",
	payload: userID,
});

export const addPostCaption = (childNodesArray) => ({
	type: "ADD_POST_CAPTION",
	payload: childNodesArray,
});

export const setAddPostErrorMessage = (errorMessage) => ({
	type: "SET_ADD_POST_ERROR_MESSAGE",
	payload: errorMessage,
});

const setAddPostSuccessMessage = (successMessage) => ({
	type: "SET_ADD_POST_SUCCESS_MESSAGE",
	payload: successMessage,
});

const resetAddPostForm = () => ({
	type: "RESET_ADD_POST_FORM",
});

export const submitPost =
	(
		uploadedPostImagesArray,
		selectedPostCategoriesArray,
		taggedPostUsersArray,
		postCaptionNodesArray
	) =>
	async (dispatch) => {
		if (
			uploadedPostImagesArray.length > 0 &&
			selectedPostCategoriesArray.length > 0
		) {
			const token = fetchToken();

			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/upload/post",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				data: {
					imagesArray: uploadedPostImagesArray,
					categoriesArray: selectedPostCategoriesArray,
					taggedUsersArray: taggedPostUsersArray,
					nodesArray: postCaptionNodesArray,
				},
			});

			const { postID, success, error } = data;

			if (error) {
				dispatch(setAddPostErrorMessage(error));
			} else if (success) {
				dispatch(setAddPostSuccessMessage(success));

				setCoupleSeconds(() => {
					dispatch(setPostID(postID));

					dispatch(resetAddPostForm());

					dispatch(resetUploadImage());
				}, 1000);
			}
		} else if (uploadedPostImagesArray.length === 0) {
			dispatch(
				setUploadImageErrorMessage({
					error: "At least 1 image must be added to the post",
				})
			);
		} else if (selectedPostCategoriesArray.length === 0) {
			dispatch(
				setUploadImageErrorMessage({
					postCategory: "At least 1 category must be selected",
				})
			);
		}
	};
