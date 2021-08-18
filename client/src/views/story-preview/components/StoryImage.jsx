import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { IconElement, Loader } from "../../shared";

import { setUploadedStoryImage } from "../../../redux/add-story/story-image/storyImageAction";

import { useUploadOrDeleteImage } from "../../../hooks";

import { Remove } from "../../../assets";

const StoryImageStyle = styled.div`
	position: absolute;
	z-index: 1;
	display: block;
	width: ${(props) => (props.isImageTall ? "auto" : "90%")};
	height: ${(props) => (props.isImageTall ? "90%" : "auto")};
	border-radius: 1rem;
	overflow: hidden;
	cursor: move;

	& > img {
		width: ${(props) => (props.isImageTall ? "auto" : "100%")};
		height: ${(props) => (props.isImageTall ? "100%" : "auto")};
		object-fit: cover;
	}

	&:hover {
		cursor: pointer;
	}
`;

const StoryImage = ({ draggableElementRef, handleDraggableOnMouseDown }) => {
	const dispatch = useDispatch();

	const { uploadedStoryImage } = useSelector(
		(state) => state.storyImageReducer
	);

	const { deleteImageLogic } = useUploadOrDeleteImage();

	React.useEffect(() => {
		if (!uploadedStoryImage) {
			return;
		}

		draggableElementRef.current.style.top = "50%";

		draggableElementRef.current.style.left = "50%";

		draggableElementRef.current.style.transform = "translate(-50%, -50%)";
	}, [uploadedStoryImage]);

	const handleRemoveIconOnClick = () => {
		deleteImageLogic(uploadedStoryImage.id);

		dispatch(setUploadedStoryImage(null));
	};

	return uploadedStoryImage ? (
		<StoryImageStyle
			id="story-image"
			ref={draggableElementRef}
			onMouseDown={handleDraggableOnMouseDown}
			isImageTall={
				uploadedStoryImage &&
				uploadedStoryImage.image_height > uploadedStoryImage.image_width
			}
		>
			<img
				id="story-image__child"
				src={uploadedStoryImage.image_url}
				alt="story"
				onMouseDown={handleDraggableOnMouseDown}
				isImageTall={
					uploadedStoryImage &&
					uploadedStoryImage.image_height > uploadedStoryImage.image_width
				}
			/>

			<IconElement
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "0",
					elementRight: "0",
					elementBackgroundColor: "#0000007d",
					elementPadding: "0.6rem",
					iconSize: "2rem",
				}}
				onClick={handleRemoveIconOnClick}
			>
				<Remove />
			</IconElement>
		</StoryImageStyle>
	) : (
		<Loader isLoaderAbsolute={true} />
	);
};

export default StoryImage;
