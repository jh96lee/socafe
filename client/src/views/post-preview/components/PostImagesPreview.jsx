import React from "react";
import { useSelector } from "react-redux";

import { Skeleton } from "../../shared/index";

import {
	PostImagesPreviewStyle,
	PostImagesPreviewIconStyle,
	PostMainImageStyle,
	PostOverlayImageStyle,
} from "../styles/PostImagesPreviewStyle";

import { Right, Left } from "../../../assets";

const PostImagesPreview = () => {
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.addPostReducer
	);
	const { isImageDeleting } = useSelector((state) => state.uploadImageReducer);

	const handleOnClick = (e) => {
		const iconDirection = e.currentTarget.dataset.postImagesPreviewIcon;

		if (iconDirection === "right") {
			setCurrentImageIndex((prevState) => prevState + 1);
		} else {
			setCurrentImageIndex((prevState) => prevState - 1);
		}
	};

	React.useEffect(() => {
		if (isImageDeleting) {
			setCurrentImageIndex(0);
		}
	}, [isImageDeleting]);

	return (
		<PostImagesPreviewStyle>
			{uploadedPostImagesArray.length <= 1 ? null : (
				<React.Fragment>
					{currentImageIndex !== 0 && (
						<PostImagesPreviewIconStyle
							id="post-images-preview-icon-left"
							onClick={handleOnClick}
							data-post-images-preview-icon="left"
							value="left"
						>
							<Left />
						</PostImagesPreviewIconStyle>
					)}

					{currentImageIndex !== uploadedPostImagesArray.length - 1 && (
						<PostImagesPreviewIconStyle
							id="post-images-preview-icon-right"
							onClick={handleOnClick}
							data-post-images-preview-icon="right"
							value="right"
						>
							<Right />
						</PostImagesPreviewIconStyle>
					)}
				</React.Fragment>
			)}

			{uploadedPostImagesArray.length > 0 ? (
				<React.Fragment>
					<PostOverlayImageStyle
						src={uploadedPostImagesArray[currentImageIndex].url}
					/>

					<div id="overlay"></div>

					<PostMainImageStyle
						isImageWide={
							uploadedPostImagesArray[currentImageIndex].width >
							uploadedPostImagesArray[currentImageIndex].height
						}
						src={uploadedPostImagesArray[currentImageIndex].url}
					/>
				</React.Fragment>
			) : (
				<Skeleton skeletonWidth="100%" skeletonHeight="100%" />
			)}
		</PostImagesPreviewStyle>
	);
};

export default PostImagesPreview;
