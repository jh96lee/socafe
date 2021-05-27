import { setUploadImageErrorMessage } from "../upload-image/uploadImageAction";

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
	(uploadedImagesArray, postCategoriesArray) => (dispatch) => {
		if (uploadedImagesArray.length > 0 && postCategoriesArray.length > 0) {
			// TODO: submit post and interact with the server
		} else if (uploadedImagesArray.length === 0) {
			dispatch(
				setUploadImageErrorMessage({
					error: "At least 1 image must be added to the post",
				})
			);
		} else if (postCategoriesArray.length === 0) {
			dispatch(
				setUploadImageErrorMessage({
					postCategory: "At least 1 category must be selected",
				})
			);
		}
	};
