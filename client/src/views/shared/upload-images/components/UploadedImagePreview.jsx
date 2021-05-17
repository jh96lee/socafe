import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteImageAndRemoveImage } from "../../../../redux/upload-image/uploadImageAction";

import { Loader } from "../../index";

import {
	UploadedImagePreviewStyle,
	UploadedImageIconDivStyle,
} from "../styles/UploadedImagePreviewStyle";

import { Remove } from "../../../../assets";

const UploadedImagePreview = ({ image }) => {
	const dispatch = useDispatch();

	const handleRemoveIconOnClick = () => {
		dispatch(deleteImageAndRemoveImage("post", image.id));
	};

	return (
		<UploadedImagePreviewStyle>
			<UploadedImageIconDivStyle onClick={handleRemoveIconOnClick}>
				<Remove />
			</UploadedImageIconDivStyle>

			<img src={image.url} />
		</UploadedImagePreviewStyle>
	);
};

export default UploadedImagePreview;
