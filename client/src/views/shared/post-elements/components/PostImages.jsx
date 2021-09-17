import * as React from "react";
import { useSelector } from "react-redux";

import { Icon } from "../../index";

import useResetPostImageIndex from "../../../../hooks/post/useResetPostImageIndex";

import {
	PostImagesStyle,
	PostMainImageStyle,
	PostOverlayImageStyle,
	PostImagesDirectionsStyle,
} from "../styles/PostImagesStyle";

import { Right, Left } from "../../../../assets";

const PostImages = ({ postImagesArray }) => {
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

	const { isPostImageDeleting } = useSelector(
		(state) => state.postImagesReducer
	);

	// REVIEW: when an image gets deleted in PostPreview, then reset the index to 0
	useResetPostImageIndex(isPostImageDeleting, setCurrentImageIndex);

	const handleDirectionOnClick = (e) => {
		const direction = e.currentTarget.dataset.direction;

		if (direction === "right") {
			setCurrentImageIndex((prevState) => prevState + 1);
		} else if (direction === "left") {
			setCurrentImageIndex((prevState) => prevState - 1);
		}
	};

	return (
		<PostImagesStyle>
			<PostMainImageStyle
				src={postImagesArray[currentImageIndex].image_url}
				isImageTall={
					postImagesArray[currentImageIndex].image_height >
					postImagesArray[currentImageIndex].image_width
				}
			/>

			<PostOverlayImageStyle
				src={postImagesArray[currentImageIndex].image_url}
			/>

			{postImagesArray.length !== 0 && (
				<PostImagesDirectionsStyle>
					{currentImageIndex !== 0 && (
						<Icon
							iconType="overlay"
							iconOnClick={handleDirectionOnClick}
							iconStyleObject={{
								iconSize: "2.5rem",
							}}
							otherProps={{ "data-direction": "left" }}
						>
							<Left />
						</Icon>
					)}

					{currentImageIndex !== postImagesArray.length - 1 && (
						<Icon
							iconType="overlay"
							iconOnClick={handleDirectionOnClick}
							iconStyleObject={{
								iconSize: "2.5rem",
							}}
							otherProps={{ "data-direction": "right" }}
						>
							<Right />
						</Icon>
					)}
				</PostImagesDirectionsStyle>
			)}
		</PostImagesStyle>
	);
};

export default PostImages;
