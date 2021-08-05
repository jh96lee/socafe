import * as React from "react";
import axios from "axios";

const useUploadOrDeleteImage = () => {
	const [isImageUploading, setIsImageUploading] = React.useState(false);
	const [uploadedImage, setUploadedImage] = React.useState(null);
	const [isImageDeleting, setIsImageDeleting] = React.useState(false);
	const [deletedImageID, setDeletedImageID] = React.useState(null);
	const [imageErrorMessage, setImageErrorMessage] = React.useState(null);
	const [imageSuccessMessage, setImageSuccessMessage] = React.useState(null);

	const uploadImageLogic = async (e) => {
		const filesArray = Array.from(e.target.files);

		const image = filesArray[0];

		if (image.type === "image/jpeg" || image.type === "image/png") {
			setIsImageUploading(true);
			setImageErrorMessage(null);
			setImageSuccessMessage(null);

			const formData = new FormData();

			formData.append("image", image);

			const { data } = await axios.post(
				"http://localhost:8080/upload/image",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			const { id, url, width, height, success, error } = data;

			if (success) {
				setUploadedImage({ id, url, width, height });

				setImageSuccessMessage(success);

				setIsImageUploading(false);
			} else if (error) {
				setImageErrorMessage(error);

				setIsImageUploading(false);
			}
		} else {
			setImageErrorMessage({ image: "Unsupported image format" });
		}
	};

	const deleteImageLogic = async (imageID) => {
		setIsImageDeleting(true);
		setImageErrorMessage(null);
		setImageSuccessMessage(null);

		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/delete/image",
			data: {
				id: imageID,
			},
		});

		const { success, error, id } = data;

		if (error) {
			setImageErrorMessage(error);

			setIsImageDeleting(false);
		} else if (success) {
			setDeletedImageID(id);

			setImageSuccessMessage(success);

			setIsImageDeleting(false);
		}
	};

	return {
		uploadedImage,
		deletedImageID,
		imageErrorMessage,
		imageSuccessMessage,
		uploadImageLogic,
		deleteImageLogic,
		isImageUploading,
		isImageDeleting,
		setImageErrorMessage,
		setImageSuccessMessage,
	};
};

export default useUploadOrDeleteImage;
