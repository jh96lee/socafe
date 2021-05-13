import axios from "axios";

export const setUploadImageMessage = (messageObject) => ({
	type: "SET_UPLOAD_IMAGE_MESSAGE",
	payload: messageObject,
});

export const uploadImageAndSetArray =
	(contentType, file) => async (dispatch) => {
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
					contentType === "post"
						? "SET_UPLOADED_POST_IMAGES_ARRAY"
						: "SET_UPLOADED_PRODUCT_IMAGES_ARRAY";

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
export const deleteImageAndFilterArray =
	(contentType, imageID) => async (dispatch) => {
		dispatch({ type: "START_DELETING_IMAGE" });

		try {
			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/delete/image",
				data: {
					id: imageID,
				},
			});

			const { error, success } = data;

			if (success) {
				const actionType =
					contentType === "post"
						? "FILTER_UPLOADED_POST_IMAGES_ARRAY"
						: "FILTER_UPLOADED_PRODUCT_IMAGES_ARRAY";

				dispatch({
					type: actionType,
					payload: imageID,
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
