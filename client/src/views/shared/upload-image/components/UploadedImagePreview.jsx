import * as React from "react";
import { useDispatch } from "react-redux";

import { deleteImage } from "../../../../redux/upload-image/uploadImageAction";

import {
	UploadedImagePreviewStyle,
	UploadedImageIconDivStyle,
} from "../styles/UploadedImagePreviewStyle";

import { Remove } from "../../../../assets";

const UploadedImagePreview = ({ uploadedImage, uploadedImageType }) => {
	const dispatch = useDispatch();

	const handleRemoveIconOnClick = () => {
		dispatch(deleteImage(uploadedImageType, uploadedImage.id));
	};

	return (
		<UploadedImagePreviewStyle>
			<UploadedImageIconDivStyle onClick={handleRemoveIconOnClick}>
				<Remove />
			</UploadedImageIconDivStyle>

			<img src={uploadedImage.url} />
		</UploadedImagePreviewStyle>
	);
};

export default UploadedImagePreview;
