import axios from "axios";

import { setUploadImageErrorMessage } from "../upload-image/uploadImageAction";

import { fetchToken } from "../../utils/cookie";

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

			console.log(postID, success);
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
