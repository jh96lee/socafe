import * as React from "react";
import { useSelector } from "react-redux";

import { IconElement } from "../../index";

import useResetPostImageIndex from "../../../../hooks/useResetPostImageIndex";

// import {
// 	PostImagesStyle,
// 	PostMainImageStyle,
// 	PostOverlayImageStyle,
// } from "../styles/PostImagesStyle";

import { Right, Left } from "../../../../assets";

import styled from "styled-components";

export const PostImagesStyle = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	overflow: hidden;

	& > img {
		object-fit: cover;
		border-radius: 1rem;
	}
`;

export const PostMainImageStyle = styled.img`
	position: absolute;
	z-index: 10;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: ${(props) => (props.isImageTall ? "auto" : "80%")};
	height: ${(props) => (props.isImageTall ? "80%" : "auto")};
	max-width: 101%;
	max-height: 101%;
`;

export const PostOverlayImageStyle = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
	width: 110%;
	height: 110%;
	filter: blur(15px);
`;

// REVIEW: this could either be for post or post-preview
const PostImages = ({ postImagesArray }) => {
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

	const { isPostImageDeleting } = useSelector(
		(state) => state.postImagesReducer
	);

	// REVIEW: when an image gets deleted in PostPreview, then reset the index to 0
	useResetPostImageIndex(isPostImageDeleting, setCurrentImageIndex);

	const handleOnClick = (e) => {
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
	);
};

export default PostImages;
