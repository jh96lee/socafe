import * as React from "react";

import { Icon } from "../../index";

import { UploadedImageStyle } from "../styles/UploadedImageStyle";

import { CloseAlt } from "../../../../assets";

const UploadedImage = ({
	uploadedImage,
	handleUploadedImageRemoveIconOnClick,
}) => {
	return (
		<UploadedImageStyle data-image-id={uploadedImage.id}>
			<Icon
				iconOnClick={handleUploadedImageRemoveIconOnClick}
				iconType="overlay"
				iconRole="button"
				iconStyleObject={{
					iconPosition: "absolute",
					iconTop: "0.3rem",
					iconRight: "0.3rem",
					iconSize: "1rem",
				}}
				otherProps={{
					"data-image-id": uploadedImage.id,
				}}
			>
				<CloseAlt />
			</Icon>

			<img src={uploadedImage.image_url} alt="uploaded content" />
		</UploadedImageStyle>
	);
};

export default UploadedImage;
