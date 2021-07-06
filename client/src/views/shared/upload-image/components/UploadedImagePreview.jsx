import * as React from "react";
import { useDispatch } from "react-redux";

import {
	UploadedImagePreviewStyle,
	UploadedImageIconDivStyle,
} from "../styles/UploadedImagePreviewStyle";

import { Remove } from "../../../../assets";

const UploadedImagePreview = ({ uploadedImage, deleteImageAction }) => {
	const dispatch = useDispatch();

	const handleRemoveIconOnClick = () => {
		dispatch(deleteImageAction(uploadedImage.id));
	};

	return (
		<UploadedImagePreviewStyle>
			<UploadedImageIconDivStyle onClick={handleRemoveIconOnClick}>
				<Remove />
			</UploadedImageIconDivStyle>

			<img src={uploadedImage.url} alt="uploaded content" />
		</UploadedImagePreviewStyle>
	);
};

export default UploadedImagePreview;
