import * as React from "react";
import { useSelector } from "react-redux";

import { Message, UploadImage } from "../../shared";

import {
	uploadPostImage,
	deletePostImage,
	setPostImageErrorMessage,
} from "../../../redux/upload-post/post-image/postImageAction";

import { AddContentStyle } from "../../../styles";

const AddPostImages = () => {
	const {
		isPostImageUploading,
		isPostImageDeleting,
		uploadedPostImagesArray,
		postImageSuccessMessage,
		postImageErrorMessage,
	} = useSelector((state) => state.postImageReducer);

	return (
		<AddContentStyle>
			<h3>Upload Photos</h3>

			<Message
				successMessage={postImageSuccessMessage && postImageSuccessMessage}
				errorMessage={postImageErrorMessage && postImageErrorMessage.image}
			/>

			<UploadImage
				uploadedImagesArray={uploadedPostImagesArray}
				uploadImageAction={uploadPostImage}
				deleteImageAction={deletePostImage}
				contentAdditionErrorMessageAction={setPostImageErrorMessage}
				isImageUploading={isPostImageUploading}
				isImageDeleting={isPostImageDeleting}
			/>
		</AddContentStyle>
	);
};

export default AddPostImages;
