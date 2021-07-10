import { uploadImageRequest } from "../../utils/uploadImageRequest";
import { deleteImageRequest } from "../../utils/deleteImageRequest";

export const startUploadingPostImage = () => ({
	type: "START_UPLOADING_POST_IMAGE",
});

export const startDeletingPostImage = () => ({
	type: "START_DELETING_POST_IMAGE",
});

export const endUploadingPostImage = () => ({
	type: "END_UPLOADING_POST_IMAGE",
});

export const endDeletingPostImage = () => ({
	type: "END_DELETING_POST_IMAGE",
});

export const addPostImage = (image) => ({
	type: "ADD_POST_IMAGE",
	payload: image,
});

export const removePostImage = (imageID) => ({
	type: "REMOVE_POST_IMAGE",
	payload: imageID,
});

export const setPostImagesSuccessMessage = (message) => ({
	type: "SET_POST_IMAGES_SUCCESS_MESSAGE",
	payload: message,
});

export const setPostImagesErrorMessage = (message) => ({
	type: "SET_POST_IMAGES_ERROR_MESSAGE",
	payload: message,
});

export const uploadPostImage = (file) => async (dispatch) => {
	dispatch(startUploadingPostImage());

	try {
		const { id, url, width, height, error, success } = await uploadImageRequest(
			file
		);

		if (success) {
			dispatch(addPostImage({ id, url, width, height }));

			dispatch(setPostImagesSuccessMessage(success));

			dispatch(endUploadingPostImage());
		} else if (error) {
			dispatch(setPostImagesErrorMessage(error));

			dispatch(endUploadingPostImage());
		}
	} catch (error) {
		dispatch(endUploadingPostImage());

		dispatch(
			setPostImagesErrorMessage({
				image: "There has been an error while uploading your image/s",
			})
		);
	}
};

export const deletePostImage = (uploadedImageID) => async (dispatch) => {
	dispatch(startDeletingPostImage());

	try {
		const { error, success } = await deleteImageRequest(uploadedImageID);

		if (success) {
			dispatch(removePostImage(uploadedImageID));

			dispatch(setPostImagesSuccessMessage(success));

			dispatch(endDeletingPostImage());
		} else if (error) {
			dispatch(endDeletingPostImage());

			dispatch(setPostImagesErrorMessage(error));
		}
	} catch (error) {
		dispatch(endDeletingPostImage());

		dispatch(
			setPostImagesErrorMessage({
				image: "There has been an error while deleting the selected image",
			})
		);
	}
};
