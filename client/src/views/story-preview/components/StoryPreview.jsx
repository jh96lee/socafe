import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import StoryText from "./StoryText";
import StoryImage from "./StoryImage";

import {
	setUploadedStoryImageTop,
	setUploadedStoryImageLeft,
} from "../../../redux/add-story/story-image/storyImageAction";
import {
	setStoryTextTop,
	setStoryTextLeft,
} from "../../../redux/add-story/story-text/storyTextAction";

const StoryPreviewStyle = styled.div`
	position: relative;
	display: block;
	margin: 3.5rem auto;
	width: 48rem;
	height: 65rem;
	border: 2px solid var(--separator-2);
	border-radius: 1rem;
	overflow: hidden;
	margin: auto;
	background: ${(props) => props.storyBackground};
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
		} else {
			dispatch(setStoryTextTop(draggableElementRef.current.style.top));

			dispatch(setStoryTextLeft(draggableElementRef.current.style.left));
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
		>
			{isStoryTextAdded && (
				<StoryText
					draggableElementRef={draggableElementRef}
					handleDraggableOnMouseDown={handleDraggableOnMouseDown}
				/>
			)}

			{uploadedStoryImage && (
				<StoryImage
					draggableElementRef={draggableElementRef}
					handleDraggableOnMouseDown={handleDraggableOnMouseDown}
				/>
			)}
		</StoryPreviewStyle>
	);
};

export default StoryPreview;
