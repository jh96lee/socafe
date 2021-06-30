import * as React from "react";

import UploadImageButton from "./UploadImageButton";
import UploadedImagePreview from "./UploadedImagePreview";
import { Loader } from "../../index";

import { UploadImageStyle } from "../styles/UploadImageStyle";

const UploadImages = ({
	uploadedImagesArray,
	uploadImageAction,
	deleteImageAction,
	contentAdditionErrorMessageAction,
	isImageUploading,
	isImageDeleting,
}) => {
	return (
		<UploadImageStyle>
			{isImageUploading || isImageDeleting ? (
				<Loader isLoaderAbsolute={false} />
			) : (
				uploadedImagesArray.map((image) => {
					return (
						// REVIEW: this is the individual image that was uploaded
						<UploadedImagePreview
							key={image.id}
							uploadedImage={image}
							deleteImageAction={deleteImageAction}
						/>
					);
				})
			)}

			<UploadImageButton
				uploadedImagesArray={uploadedImagesArray}
				uploadImageAction={uploadImageAction}
				contentAdditionErrorMessageAction={contentAdditionErrorMessageAction}
			/>
		</UploadImageStyle>
	);
};

export default UploadImages;
