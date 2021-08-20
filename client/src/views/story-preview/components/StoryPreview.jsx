import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import StoryPreviewText from "./StoryPreviewText";
import StoryPreviewImage from "./StoryPreviewImage";

import {
	setUploadedStoryImageTop,
	setUploadedStoryImageLeft,
	setIsUploadedStoryImageTransformed,
} from "../../../redux/add-story/story-image/storyImageAction";
import {
	setStoryTextTop,
	setStoryTextLeft,
	setIsTextTransformed,
} from "../../../redux/add-story/story-text/storyTextAction";

import { convertPixelsToViewWidth } from "../../../utils/story/convertPixelsToViewWidth";

const StoryPreviewStyle = styled.div`
	position: relative;
	display: block;
	margin: 3.5rem auto;
	border: 2px solid var(--separator-2);
	border-radius: 1rem;
	overflow: hidden;
	margin: auto;
	background: ${(props) => props.storyBackground};

	width: 48rem;
	height: 72rem;

	@media (max-width: 1000px) {
		width: ${(props) => props.responsiveStoryPreviewWidth};
		height: ${(props) => props.responsiveStoryPreviewHeight};
	}
`;

const StoryPreview = () => {
	const dispatch = useDispatch();

	const { selectedStoryBackground } = useSelector(
		(state) => state.storyBackgroundReducer
	);

	const { isStoryTextAdded } = useSelector((state) => state.storyTextReducer);

	const { uploadedStoryImage } = useSelector(
		(state) => state.storyImageReducer
	);

	const containerRef = React.useRef();
	const draggableElementRef = React.useRef();

	let draggableClickedX;
	let draggableClickedY;

	const mouseMoveEventHandler = (e) => {
		e.preventDefault();

		draggableElementRef.current.style.transform = "none";

		const { width: containerWidth, height: containerHeight } =
			containerRef.current.getBoundingClientRect();

		draggableElementRef.current.style.left = `${
			((e.clientX - containerRef.current.offsetLeft - draggableClickedX) /
				containerWidth) *
			100
		}%`;

		draggableElementRef.current.style.top = `${
			((e.clientY - containerRef.current.offsetTop - draggableClickedY) /
				containerHeight) *
			100
		}%`;
	};

	const handleDraggableOnMouseDown = (e) => {
		if (!e.target.id) {
			return;
		}

		// FIX
		if (e.target.id === "story-image__child") {
			e.preventDefault();
		}

		// REVIEW: fixed
		draggableElementRef.current = e.target.id.split("__").includes("child")
			? e.target.parentNode
			: e.target;

		// REVIEW: fixed
		draggableElementRef.current.style.boxShadow =
			"0 0 0 1.6px var(--separator-2)";

		const { x, y } = draggableElementRef.current.getBoundingClientRect();

		draggableClickedX = e.clientX - x;
		draggableClickedY = e.clientY - y;

		containerRef.current.addEventListener("mousemove", mouseMoveEventHandler);
	};

	const handleContainerOnMouseUp = (e) => {
		if (!draggableElementRef.current) {
			return;
		}

		if (draggableElementRef.current.id === "story-image") {
			dispatch(setUploadedStoryImageTop(draggableElementRef.current.style.top));

			dispatch(
				setUploadedStoryImageLeft(draggableElementRef.current.style.left)
			);

			const isTransformedBoolean =
				draggableElementRef.current.style.transform === "none" ? false : true;

			dispatch(setIsUploadedStoryImageTransformed(isTransformedBoolean));
		} else if (draggableElementRef.current.id === "story-text") {
			dispatch(setStoryTextTop(draggableElementRef.current.style.top));

			dispatch(setStoryTextLeft(draggableElementRef.current.style.left));

			const isTransformedBoolean =
				draggableElementRef.current.style.transform === "none" ? false : true;

			dispatch(setIsTextTransformed(isTransformedBoolean));
		}

		draggableElementRef.current.style.boxShadow = "none";

		containerRef.current.removeEventListener(
			"mousemove",
			mouseMoveEventHandler
		);
	};

	return (
		<StoryPreviewStyle
			ref={containerRef}
			onMouseUp={handleContainerOnMouseUp}
			storyBackground={selectedStoryBackground.background_gradient}
			responsiveStoryPreviewWidth={convertPixelsToViewWidth("480px", 1000)}
			responsiveStoryPreviewHeight={convertPixelsToViewWidth("720px", 1000)}
		>
			{isStoryTextAdded && (
				<StoryPreviewText
					draggableElementRef={draggableElementRef}
					handleDraggableOnMouseDown={handleDraggableOnMouseDown}
				/>
			)}

			{uploadedStoryImage && (
				<StoryPreviewImage
					draggableElementRef={draggableElementRef}
					handleDraggableOnMouseDown={handleDraggableOnMouseDown}
				/>
			)}
		</StoryPreviewStyle>
	);
};

export default StoryPreview;
