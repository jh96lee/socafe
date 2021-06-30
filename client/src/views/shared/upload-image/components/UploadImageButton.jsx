import * as React from "react";
import { useDispatch } from "react-redux";

import {
	UploadImageButtonStyle,
	UploadImageButtonCTAStyle,
} from "../styles/UploadImageButtonStyle";

import { Image } from "../../../../assets";

// REVIEW: UploadImageButton is for adding image that is it
const UploadImageButton = ({
	uploadedImagesArray,
	uploadImageAction,
	contentAdditionErrorMessageAction,
}) => {
	const dispatch = useDispatch();

	const handleFileInputOnChange = async (e) => {
		if (uploadedImagesArray.length >= 3) {
			dispatch(
				contentAdditionErrorMessageAction({
					image: "You can upload up to 5 images per post",
				})
			);

			return;
		}

		// REVIEW: files property returns an object with the keys being the indexes
		const filesObject = e.target.files;

		const filesArray = Object.values(filesObject);

		filesArray.forEach((file) => {
			if (file.type === "image/png" || file.type === "image/jpeg") {
				// REVIEW: if the type matches, upload the file/s
				dispatch(uploadImageAction(file));
			} else {
				// REVIEW: render error message
				dispatch(
					contentAdditionErrorMessageAction({
						image: "Unsupported image format",
					})
				);
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
