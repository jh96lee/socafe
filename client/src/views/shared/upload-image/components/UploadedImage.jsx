import * as React from "react";
import { useDispatch } from "react-redux";

import { IconElement } from "../../index";

import { UploadedImageStyle } from "../styles/UploadedImageStyle";

import { CloseAlt } from "../../../../assets";

const UploadedImage = ({ uploadedImage, deleteImageAction }) => {
	const dispatch = useDispatch();

	const handleRemoveIconOnClick = () => {
		dispatch(deleteImageAction(uploadedImage.id));
	};

	return (
		<UploadedImageStyle>
			<IconElement
				onClick={handleRemoveIconOnClick}
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
			>
				<CloseAlt />
			</IconElement>

			<img src={uploadedImage.url} alt="uploaded content" />
		</UploadedImageStyle>
	);
};

export default UploadedImage;
