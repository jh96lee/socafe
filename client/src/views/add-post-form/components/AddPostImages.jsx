import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Message, UploadImage } from "../../shared";

import {
	addPostImage,
	removePostImage,
} from "../../../redux/add-post/post-images/postImagesAction";

import { useSaveDraft, useUploadOrDeleteImage } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostImages = () => {
	const dispatch = useDispatch();

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.postImagesReducer
	);

	const {
		uploadedImage,
		deletedImageID,
		imageErrorMessage,
		imageSuccessMessage,
		uploadImageLogic,
		deleteImageLogic,
		isImageUploading,
		isImageDeleting,
		setImageErrorMessage,
	} = useUploadOrDeleteImage();

	const handleUploadImageButtonOnChange = (e) => {
		if (uploadedPostImagesArray.length >= 5) {
			setImageErrorMessage({
				image: "You can upload up to 5 images per post",
			});

			return;
		} else {
			uploadImageLogic(e);
		}
	};

	React.useEffect(() => {
		if (!uploadedImage) {
			return;
		}

		dispatch(addPostImage(uploadedImage));
	}, [dispatch, uploadedImage]);

	React.useEffect(() => {
		if (!deletedImageID) {
			return;
		}

		dispatch(removePostImage(deletedImageID));
	}, [dispatch, deletedImageID]);

	const handleUploadedImageRemoveIconOnClick = (e) => {
		const imageID = e.currentTarget.dataset.imageId;

		deleteImageLogic(imageID);
	};

	useSaveDraft("postImages", uploadedPostImagesArray);

	return (
		<AddContentStyle>
			<h3>Upload Photos</h3>

			<Message
				successMessage={imageSuccessMessage}
				errorMessage={imageErrorMessage && imageErrorMessage.image}
			/>

			<UploadImage
				uploadedImagesArray={uploadedPostImagesArray}
				handleUploadImageButtonOnChange={handleUploadImageButtonOnChange}
				handleUploadedImageRemoveIconOnClick={
					handleUploadedImageRemoveIconOnClick
				}
				isImageUploading={isImageUploading}
				isImageDeleting={isImageDeleting}
			/>
		</AddContentStyle>
	);
};

export default AddPostImages;
