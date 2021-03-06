import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Icon, Loader } from "../../shared";

import {
	setUploadedStoryImage,
	setUploadedStoryImageLeft,
	setUploadedStoryImageTop,
	setIsUploadedStoryImageTransformed,
} from "../../../redux/add-story/story-image/storyImageAction";

import { useUploadOrDeleteImage } from "../../../hooks";

import { StoryPreviewImageStyle } from "../styles/StoryPreviewImageStyle";

import { Remove } from "../../../assets";

const StoryPreviewImage = ({
	draggableElementRef,
	handleDraggableOnMouseDown,
}) => {
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

		return () => {
			dispatch(setUploadedStoryImageTop(null));

			dispatch(setUploadedStoryImageLeft(null));

			dispatch(setIsUploadedStoryImageTransformed(null));
		};
	}, [uploadedStoryImage]);

	const handleRemoveIconOnClick = () => {
		deleteImageLogic(uploadedStoryImage.id);

		dispatch(setUploadedStoryImage(null));
	};

	return uploadedStoryImage ? (
		<StoryPreviewImageStyle
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

			<Icon
				iconType="overlay"
				iconStyleObject={{
					iconPosition: "absolute",
					iconTop: "0",
					iconRight: "0",
					elementPadding: "0.6rem",
					iconSize: "2rem",
				}}
				iconOnClick={handleRemoveIconOnClick}
			>
				<Remove />
			</Icon>
		</StoryPreviewImageStyle>
	) : (
		<Loader isLoaderAbsolute={true} />
	);
};

export default StoryPreviewImage;
