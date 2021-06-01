import * as React from "react";

import PostImagesDirectionIconElement from "./PostImagesDirectionIconElement";
import { Skeleton } from "../../index";

import PostImagesStyle from "../styles/PostImagesStyle";

import { Right, Left } from "../../../../assets";

import { useSelector } from "react-redux";

import useResetPostImageIndex from "../../../../hooks/useResetPostImageIndex";

// REVIEW: this could either be for post or post-preview
const PostImages = ({
	postImagesArray,
	conditionalPostImagesRenderingVariable,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

	const { isImageDeleting } = useSelector((state) => state.uploadImageReducer);

	useResetPostImageIndex(isImageDeleting, setCurrentImageIndex);

	return conditionalPostImagesRenderingVariable ? (
		<PostImagesStyle>
			<img
				src={postImagesArray[currentImageIndex].url}
				id="main-post-image"
				data-is-image-tall={
					postImagesArray[currentImageIndex].height >
					postImagesArray[currentImageIndex].width
				}
			/>

			<div id="overlay" />

			<img
				src={postImagesArray[currentImageIndex].url}
				id="overlay-post-image"
			/>

			<PostImagesDirectionIconElement
				postImagesArray={postImagesArray}
				direction="right"
				icon={<Right />}
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
			/>

			<PostImagesDirectionIconElement
				postImagesArray={postImagesArray}
				direction="left"
				icon={<Left />}
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
			/>
		</PostImagesStyle>
	) : (
		<Skeleton skeletonWidth="100%" skeletonHeight="100%" />
	);
};

export default PostImages;
