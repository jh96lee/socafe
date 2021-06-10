import * as React from "react";
import { useSelector } from "react-redux";

import { PostTaggedUsers } from "../index";
import { Skeleton } from "../../index";
import { IconElement } from "../../index";

import useResetPostImageIndex from "../../../../hooks/useResetPostImageIndex";

import {
	PostImagesStyle,
	PostMainImageStyle,
	PostOverlayImageStyle,
} from "../styles/PostImagesStyle";

import { Right, Left } from "../../../../assets";

// REVIEW: this could either be for post or post-preview
const PostImages = ({
	postImagesArray,
	conditionalPostImagesRenderingVariable,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

	const { isImageDeleting } = useSelector((state) => state.uploadImageReducer);

	// REVIEW: when an image gets deleted in PostPreview, then reset the index to 0
	useResetPostImageIndex(isImageDeleting, setCurrentImageIndex);

	const handleOnClick = (e) => {
		const direction = e.currentTarget.dataset.direction;

		if (direction === "right") {
			setCurrentImageIndex((prevState) => prevState + 1);
		} else if (direction === "left") {
			setCurrentImageIndex((prevState) => prevState - 1);
		}
	};

	return conditionalPostImagesRenderingVariable ? (
		<PostImagesStyle>
			<PostMainImageStyle
				src={postImagesArray[currentImageIndex].url}
				isImageTall={
					postImagesArray[currentImageIndex].height >
					postImagesArray[currentImageIndex].width
				}
			/>

			<PostOverlayImageStyle src={postImagesArray[currentImageIndex].url} />

			{postImagesArray.length !== 0 && (
				<React.Fragment>
					{currentImageIndex !== postImagesArray.length - 1 && (
						<IconElement
							onClick={handleOnClick}
							iconElementStyleObject={{
								elementPosition: "absolute",
								elementTop: "50%",
								elementRight: "1rem",
								elementTransform: "translateY(-50%)",
								elementZIndex: "5",
								iconSize: "1.8rem",
								elementPadding: "1.3rem",
								elementBackgroundColor: "#fff",
								elementBoxShadow: "0 0 0 1.6px #b9c8cf",
								elementHoverBackgroundColor: "#fff",
								iconColor: "#000",
								iconHoverColor: "#000",
							}}
							otherProps={{ "data-direction": "right" }}
						>
							<Right />
						</IconElement>
					)}

					{currentImageIndex !== 0 && (
						<IconElement
							onClick={handleOnClick}
							iconElementStyleObject={{
								elementPosition: "absolute",
								elementTop: "50%",
								elementLeft: "1rem",
								elementTransform: "translateY(-50%)",
								elementZIndex: "5",
								iconSize: "1.8rem",
								elementPadding: "1.3rem",
								elementBackgroundColor: "#fff",
								elementBoxShadow: "0 0 0 1.6px #b9c8cf",
								elementHoverBackgroundColor: "#fff",
								iconColor: "#000",
								iconHoverColor: "#000",
							}}
							otherProps={{ "data-direction": "left" }}
						>
							<Left />
						</IconElement>
					)}
				</React.Fragment>
			)}
		</PostImagesStyle>
	) : (
		<Skeleton skeletonWidth="100%" skeletonHeight="100%" />
	);
};

export default PostImages;
