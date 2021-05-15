import * as React from "react";
import { useDispatch } from "react-redux";

import { deleteImageAndFilterArray } from "../../../../redux/upload-image/uploadImageAction";

import {
	UploadedImagePreviewStyle,
	UploadedImageIconDivStyle,
} from "../styles/UploadedImagePreviewStyle";

import { Remove } from "../../../../assets";

const UploadedImagePreview = ({ image }) => {
	const dispatch = useDispatch();

	const uploadedImagePreviewRef = React.useRef();

	const handleRemoveIconOnClick = () => {
		dispatch(
			deleteImageAndFilterArray("post", uploadedImagePreviewRef.current.id)
		);
	};

	return (
		<UploadedImagePreviewStyle ref={uploadedImagePreviewRef} id={image.id}>
			<UploadedImageIconDivStyle onClick={handleRemoveIconOnClick}>
				<Remove />
			</UploadedImageIconDivStyle>

			<img src={image.url} />
		</UploadedImagePreviewStyle>
	);
};

export default UploadedImagePreview;
