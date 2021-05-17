import * as React from "react";
import { useSelector } from "react-redux";

import UploadImageButton from "./UploadImageButton";
import UploadedImagePreview from "./UploadedImagePreview";
import { Loader } from "../../index";

import { UploadImagesStyle } from "../styles/UploadImagesStyle";

const UploadImages = () => {
	// TODO: later remove this, has to be a prop
	const contentType = "post";

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.addPostReducer
	);

	const { isImageUploading, isImageDeleting } = useSelector(
		(state) => state.uploadImageReducer
	);

	// TODO: later change the naming of this variable
	const imagesArray =
		contentType === "post"
			? uploadedPostImagesArray
			: "uploadedProductImagesArray";

	return (
		<UploadImagesStyle>
			{isImageDeleting || isImageUploading ? (
				<Loader />
			) : (
				imagesArray.map((image) => {
					return <UploadedImagePreview key={image.id} image={image} />;
				})
			)}

			<UploadImageButton />
		</UploadImagesStyle>
	);
};

export default UploadImages;
