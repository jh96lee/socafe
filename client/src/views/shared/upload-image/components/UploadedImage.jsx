import * as React from "react";

import { IconElement } from "../../index";

import { UploadedImageStyle } from "../styles/UploadedImageStyle";

import { CloseAlt } from "../../../../assets";

const UploadedImage = ({
	uploadedImage,
	handleUploadedImageRemoveIconOnClick,
}) => {
	return (
		<UploadedImageStyle data-image-id={uploadedImage.id}>
			<IconElement
				onClick={handleUploadedImageRemoveIconOnClick}
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "0",
					elementRight: "0",
					elementPadding: "0.7rem",
					elementBackgroundColor: "var( --button-default-bg-color)",
					elementHoverBackgroundColor: "var(--button-default-hover-bg-color)",
					iconColor: "#fff",
					iconSize: "1rem",
				}}
				otherProps={{
					"data-image-id": uploadedImage.id,
				}}
			>
				<CloseAlt />
			</IconElement>

			<img src={uploadedImage.image_url} alt="uploaded content" />
		</UploadedImageStyle>
	);
};

export default UploadedImage;
