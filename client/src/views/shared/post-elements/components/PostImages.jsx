import * as React from "react";
import { useSelector } from "react-redux";

import { IconElement } from "../../index";

import useResetPostImageIndex from "../../../../hooks/useResetPostImageIndex";

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
				src={postImagesArray[currentImageIndex].url}
				isImageTall={
					postImagesArray[currentImageIndex].height >
					postImagesArray[currentImageIndex].width
				}
			/>

			<PostOverlayImageStyle src={postImagesArray[currentImageIndex].url} />

			{postImagesArray.length !== 0 && (
				<PostImagesDirectionsStyle>
					{currentImageIndex !== 0 && (
						<IconElement
							onClick={handleDirectionOnClick}
							iconElementStyleObject={{
								elementBackgroundColor: "#0000004a",
								iconColor: "#fff",
								iconSize: "2.5rem",
							}}
							otherProps={{ "data-direction": "left" }}
						>
							<Left />
						</IconElement>
					)}

					{currentImageIndex !== postImagesArray.length - 1 && (
						<IconElement
							onClick={handleDirectionOnClick}
							iconElementStyleObject={{
								elementBackgroundColor: "#0000004a",
								iconColor: "#fff",
								iconSize: "2.5rem",
							}}
							otherProps={{ "data-direction": "right" }}
						>
							<Right />
						</IconElement>
					)}
				</PostImagesDirectionsStyle>
			)}
		</PostImagesStyle>
	);
};

export default PostImages;
