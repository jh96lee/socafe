import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import UploadImageButton from "./UploadImageButton";
import UploadedImagePreview from "./UploadedImagePreview";
import { Loader } from "../../index";

import { UploadImageStyle } from "../styles/UploadImageStyle";

import { setUploadImageMessage } from "../../../../redux/upload-image/uploadImageAction";

const UploadImages = ({ uploadedImageType }) => {
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	const dispatch = useDispatch();

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.addPostReducer
	);

	const handleOnClick = () => {
		setIsSubmitted((prevState) => !prevState);
	};

	const imagesArray =
		uploadedImageType === "post-image"
			? uploadedPostImagesArray
			: "uploadedProductImagesArray";

	React.useEffect(() => {
		return () => {
			// TODO: fix
			// dispatch(setUploadImageMessage(null));
		};
	}, []);

	return (
		<UploadImageStyle>
			{imagesArray.map((image) => {
				return (
					<UploadedImagePreview
						key={image.id}
						uploadedImage={image}
						uploadedImageType={uploadedImageType}
					/>
				);
			})}

			<UploadImageButton uploadedImageType={uploadedImageType} />
		</UploadImageStyle>
	);
};

export default UploadImages;
