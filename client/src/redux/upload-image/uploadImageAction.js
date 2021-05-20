import axios from "axios";

export const setUploadImageMessage = (messageObject) => ({
	type: "SET_UPLOAD_IMAGE_MESSAGE",
	payload: messageObject,
});

export const uploadImageAndAddImage =
	(uploadedImageType, file) => async (dispatch) => {
		dispatch(setUploadImageMessage(null));

		try {
			dispatch({ type: "START_UPLOADING_IMAGE" });

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

			const { url } = data;

			if (url) {
				const actionType =
					uploadedImageType === "post-image"
						? "ADD_POST_IMAGE"
						: "ADD_PRODUCT_IMAGE";

				dispatch({
					type: actionType,
					payload: data,
				});

				dispatch({ type: "END_UPLOADING_IMAGE" });
			}
		} catch (error) {
			dispatch({ type: "END_UPLOADING_IMAGE" });

			dispatch(
				setUploadImageMessage({
					error: "There has been an error while uploading your image/s",
				})
			);
		}
	};

// REVIEW: id of the image to be deleted needs to be provided and the array needs to be modified needs to be provided as well
export const deleteImageAndRemoveImage =
	(uploadedImageType, uploadedImageID) => async (dispatch) => {
		dispatch({ type: "START_DELETING_IMAGE" });

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
				const actionType =
					uploadedImageType === "post-image"
						? "REMOVE_POST_IMAGE"
						: "REMOVE_PRODUCT_IMAGE";

				dispatch({
					type: actionType,
					payload: uploadedImageID,
				});

				dispatch(setUploadImageMessage(data));

				dispatch({ type: "END_DELETING_IMAGE" });
			} else if (error) {
				dispatch({ type: "END_DELETING_IMAGE" });

				dispatch(setUploadImageMessage(data));
			}
		} catch (error) {
			dispatch({ type: "END_DELETING_IMAGE" });

			dispatch(
				setUploadImageMessage({
					error: "There has been an error while deleting the selected image",
				})
			);
		}
	};
