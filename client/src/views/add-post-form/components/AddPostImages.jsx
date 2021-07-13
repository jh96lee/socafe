import * as React from "react";
import { useSelector } from "react-redux";

import { Message, UploadImage } from "../../shared";

import {
	uploadPostImage,
	deletePostImage,
	setPostImagesErrorMessage,
} from "../../../redux/add-post/post-images/postImagesAction";

import { useSaveDraft } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostImages = () => {
	const {
		isPostImageUploading,
		isPostImageDeleting,
		uploadedPostImagesArray,
		postImagesSuccessMessage,
		postImagesErrorMessage,
	} = useSelector((state) => state.postImagesReducer);

	useSaveDraft("postImages", uploadedPostImagesArray);

	return (
		<AddContentStyle>
			<h3>Upload Photos</h3>

			<Message
				successMessage={postImagesSuccessMessage}
				errorMessage={postImagesErrorMessage && postImagesErrorMessage.image}
			/>

			<UploadImage
				uploadedImagesArray={uploadedPostImagesArray}
				uploadImageAction={uploadPostImage}
				deleteImageAction={deletePostImage}
				contentAdditionErrorMessageAction={setPostImagesErrorMessage}
				isImageUploading={isPostImageUploading}
				isImageDeleting={isPostImageDeleting}
			/>
		</AddContentStyle>
	);
};

export default AddPostImages;
