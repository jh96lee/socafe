import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import UploadImageButton from "./UploadImageButton";
import UploadedImagePreview from "./UploadedImagePreview";
import { Loader } from "../../index";

import { UploadImagesStyle } from "../styles/UploadImagesStyle";

import { setUploadImageMessage } from "../../../../redux/upload-image/uploadImageAction";

const UploadImages = ({ uploadedImageType }) => {
	const dispatch = useDispatch();

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.addPostReducer
	);
	const { isImageUploading, isImageDeleting } = useSelector(
		(state) => state.uploadImageReducer
	);

	const imagesArray =
		uploadedImageType === "post-image"
			? uploadedPostImagesArray
			: "uploadedProductImagesArray";

	React.useEffect(() => {
		return () => {
			// REVIEW: to reset uploadImageMessage state when component unmounts
			dispatch(setUploadImageMessage(null));
		};
	}, []);

	return (
		<UploadImagesStyle>
			{isImageDeleting || isImageUploading ? (
				<Loader />
			) : (
				imagesArray.map((image) => {
					return (
						<UploadedImagePreview
							key={image.id}
							uploadedImage={image}
							uploadedImageType={uploadedImageType}
						/>
					);
				})
			)}

			<UploadImageButton uploadedImageType={uploadedImageType} />
		</UploadImagesStyle>
	);
};

export default UploadImages;
