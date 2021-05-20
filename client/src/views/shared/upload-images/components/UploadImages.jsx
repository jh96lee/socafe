import * as React from "react";
import { useSelector } from "react-redux";

import UploadImageButton from "./UploadImageButton";
import UploadedImagePreview from "./UploadedImagePreview";
import { Loader } from "../../index";

import { UploadImagesStyle } from "../styles/UploadImagesStyle";

const UploadImages = ({ uploadedImageType }) => {
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
