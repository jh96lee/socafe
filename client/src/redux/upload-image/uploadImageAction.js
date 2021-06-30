import axios from "axios";

const startUploadingImage = () => ({
	type: "START_UPLOADING_IMAGE",
});

const endUploadingImage = () => ({
	type: "END_UPLOADING_IMAGE",
});

const startDeletingImage = () => ({
	type: "START_DELETING_IMAGE",
});

const endDeletingImage = () => ({
	type: "END_DELETING_IMAGE",
});

export const resetUploadImage = () => ({
	type: "RESET_UPLOAD_IMAGE",
});

export const uploadImage =
	(
		file,
		addImageAction,
		contentAdditionSuccessMessageAction,
		contentAdditionErrorMessageAction
	) =>
	async (dispatch) => {
		dispatch(startUploadingImage());

		try {
			const formData = new FormData();

			formData.append("image", file);

			// REVIEW: data contains the public_id and url of the image
			const { data } = await axios.post(
				"http://localhost:8080/upload/image",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			const { id, url, width, height, error, success } = data;

			if (success) {
				dispatch(addImageAction({ id, url, width, height }));

				dispatch(contentAdditionSuccessMessageAction(success));

				dispatch(endUploadingImage());
			} else if (error) {
				dispatch(contentAdditionErrorMessageAction(error));

				dispatch(endUploadingImage());
			}
		} catch (error) {
			dispatch(endUploadingImage());

			dispatch(
				contentAdditionErrorMessageAction({
					image: "There has been an error while uploading your image/s",
				})
			);
		}
	};

// REVIEW: id of the image to be deleted needs to be provided and the array needs to be modified needs to be provided as well
export const deleteImage =
	(
		uploadedImageID,
		removeImageAction,
		contentAdditionSuccessMessageAction,
		contentAdditionErrorMessageAction
	) =>
	async (dispatch) => {
		dispatch(startDeletingImage());

		try {
			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/delete/image",
				data: {
					id: uploadedImageID,
				},
			});

			const { error, success } = data;

			if (success) {
				dispatch(removeImageAction(uploadedImageID));

				dispatch(contentAdditionSuccessMessageAction(success));

				dispatch(endDeletingImage());
			} else if (error) {
				dispatch(endDeletingImage());

				dispatch(contentAdditionErrorMessageAction(error));
			}
		} catch (error) {
			dispatch(endDeletingImage());

			dispatch(
				contentAdditionErrorMessageAction({
					image: "There has been an error while deleting the selected image",
				})
			);
		}
	};
