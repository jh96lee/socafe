import * as React from "react";

import {
	UploadImageButtonStyle,
	UploadImageButtonCTAStyle,
} from "../styles/UploadImageButtonStyle";

import { Images } from "../../../../assets";

// REVIEW: UploadImageButton is for adding image that is it
const UploadImageButton = ({ handleUploadImageButtonOnChange }) => {
	return (
		<UploadImageButtonStyle>
			<input type="file" onChange={handleUploadImageButtonOnChange} />

			<UploadImageButtonCTAStyle>
				<Images />

				<p>Upload Image</p>
			</UploadImageButtonCTAStyle>
		</UploadImageButtonStyle>
	);
};

export default UploadImageButton;
