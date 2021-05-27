import axios from "axios";

export const setUploadImageErrorMessage = (errorMessage) => ({
	type: "SET_UPLOAD_IMAGE_MESSAGE",
	payload: errorMessage,
});

const setUploadImageSuccessMessage = (successMessage) => ({
	type: "SET_UPLOAD_IMAGE_SUCCESS_MESSAGE",
	payload: successMessage,
});

export const uploadImage = (uploadedImageType, file) => async (dispatch) => {
	dispatch({ type: "START_UPLOADING_IMAGE" });

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

		const { error, success } = data;

		if (success) {
			const actionType =
				uploadedImageType === "post-image"
					? "ADD_POST_IMAGE"
					: "ADD_PRODUCT_IMAGE";

			dispatch({
				type: actionType,
				payload: data,
			});

			dispatch(setUploadImageSuccessMessage(success));

			dispatch({ type: "END_UPLOADING_IMAGE" });
		} else if (error) {
			dispatch(setUploadImageErrorMessage(error));
		}
	} catch (error) {
		dispatch({ type: "END_UPLOADING_IMAGE" });

		dispatch(
			setUploadImageErrorMessage({
				error: "There has been an error while uploading your image/s",
			})
		);
	}
};

// REVIEW: id of the image to be deleted needs to be provided and the array needs to be modified needs to be provided as well
export const deleteImage =
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

				dispatch(setUploadImageSuccessMessage(success));

				dispatch({ type: "END_DELETING_IMAGE" });
			} else if (error) {
				dispatch({ type: "END_DELETING_IMAGE" });

				dispatch(setUploadImageErrorMessage(error));
			}
		} catch (error) {
			dispatch({ type: "END_DELETING_IMAGE" });

			dispatch(
				setUploadImageErrorMessage({
					error: "There has been an error while deleting the selected image",
				})
			);
		}
	};
