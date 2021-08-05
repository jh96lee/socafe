import * as React from "react";

import UploadImageButton from "./UploadImageButton";
import UploadedImage from "./UploadedImage";
import { Loader } from "../../index";

import { UploadImageStyle } from "../styles/UploadImageStyle";

const UploadImages = ({
	uploadedImagesArray,
	handleUploadImageButtonOnChange,
	handleUploadedImageRemoveIconOnClick,
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
						<UploadedImage
							key={image.id}
							uploadedImage={image}
							handleUploadedImageRemoveIconOnClick={
								handleUploadedImageRemoveIconOnClick
							}
						/>
					);
				})
			)}

			<UploadImageButton
				handleUploadImageButtonOnChange={handleUploadImageButtonOnChange}
			/>
		</UploadImageStyle>
	);
};

export default UploadImages;
