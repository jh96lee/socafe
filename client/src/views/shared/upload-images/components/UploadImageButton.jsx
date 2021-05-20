import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setUploadImageMessage,
	uploadImageAndAddImage,
} from "../../../../redux/upload-image/uploadImageAction";

import {
	UploadImageButtonStyle,
	UploadImageButtonCTAStyle,
} from "../styles/UploadImageButtonStyle";

import { Image } from "../../../../assets";

const UploadImageButton = ({ uploadedImageType }) => {
	const dispatch = useDispatch();

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.addPostReducer
	);

	// TODO: later change the naming of this variable
	const imagesArray =
		uploadedImageType === "post-image"
			? uploadedPostImagesArray
			: "uploadedProductImagesArray";

	const handleFileInputOnChange = async (e) => {
		// REVIEW: files property returns an object with the keys being the indexes
		const filesObject = e.target.files;

		const filesArray = Object.values(filesObject);

		filesArray.forEach(async (file) => {
			if (imagesArray.length >= 5) {
				// REVIEW: render error message
				dispatch(
					setUploadImageMessage({
						error: "You can upload up to 5 images per post",
					})
				);
			} else {
				if (file.type === "image/png" || file.type === "image/jpeg") {
					// REVIEW: upload image and add uploaded image to corresponding array
					dispatch(uploadImageAndAddImage(uploadedImageType, file));
				} else {
					// REVIEW: render error message
					dispatch(
						setUploadImageMessage({ error: "Unsupported image format" })
					);
				}
			}
		});
	};

	return (
		<UploadImageButtonStyle>
			<input type="file" onChange={handleFileInputOnChange} />

			<UploadImageButtonCTAStyle>
				<Image />

				<p>Add Photo</p>
			</UploadImageButtonCTAStyle>
		</UploadImageButtonStyle>
	);
};

export default UploadImageButton;
