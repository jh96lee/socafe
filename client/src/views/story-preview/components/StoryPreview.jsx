import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

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

import { useStory } from "../../../hooks";

import { StoryStyle } from "../../../styles";

const StoryPreview = ({ convertUnitToViewWidthBreakingPoint = 1000 }) => {
	const dispatch = useDispatch();

	const { storyBackgrounds, selectedStoryBackgroundIndex } = useSelector(
		(state) => state.storyBackgroundReducer
	);

	const { isStoryTextAdded, textSizeRatiosArray, selectedTextSizeRatioIndex } =
		useSelector((state) => state.storyTextReducer);

	const { uploadedStoryImage } = useSelector(
		(state) => state.storyImageReducer
	);

	const storyPreviewRef = React.useRef();
	const draggableElementRef = React.useRef();

	const storyTextRatio = React.useMemo(() => {
		return textSizeRatiosArray[selectedTextSizeRatioIndex].ratio;
	}, [selectedTextSizeRatioIndex]);

	// TODO: useStory hook
	const {
		storyWidth,
		storyHeight,
		storyFontSize,
		responsiveStoryWidth,
		responsiveStoryHeight,
		responsiveStoryFontSize,
	} = useStory(
		storyPreviewRef,
		storyTextRatio,
		convertUnitToViewWidthBreakingPoint
	);

	let draggableClickedX;
	let draggableClickedY;

	const mouseMoveEventHandler = (e) => {
		e.preventDefault();

		draggableElementRef.current.style.transform = "none";

		const { width: containerWidth, height: containerHeight } =
			storyPreviewRef.current.getBoundingClientRect();

		draggableElementRef.current.style.left = `${
			((e.clientX - storyPreviewRef.current.offsetLeft - draggableClickedX) /
				containerWidth) *
			100
		}%`;

		draggableElementRef.current.style.top = `${
			((e.clientY - storyPreviewRef.current.offsetTop - draggableClickedY) /
				containerHeight) *
			100
		}%`;
	};

	// REVIEW: set what the draggable element is
	const handleDraggableOnMouseDown = (e) => {
		if (
			!e.target.id ||
			e.target.nodeName === "svg" ||
			e.target.nodeName === "path"
		) {
			return;
		}

		// REVIEW: fixed
		if (e.target.nodeName === "IMG") {
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

		storyPreviewRef.current.addEventListener(
			"mousemove",
			mouseMoveEventHandler
		);
	};

	// REVIEW: set state top and left values
	const handleContainerOnMouseUp = (e) => {
		if (
			!draggableElementRef.current ||
			!e.target.id ||
			e.target.nodeName === "svg" ||
			e.target.nodeName === "path"
		) {
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

		storyPreviewRef.current.removeEventListener(
			"mousemove",
			mouseMoveEventHandler
		);
	};

	return (
		<StoryStyle
			ref={storyPreviewRef}
			onMouseUp={handleContainerOnMouseUp}
			storyBackground={
				storyBackgrounds &&
				storyBackgrounds[selectedStoryBackgroundIndex].background_gradient
			}
			storyWidth={storyWidth}
			storyHeight={storyHeight}
			responsiveStoryWidth={responsiveStoryWidth}
			responsiveStoryHeight={responsiveStoryHeight}
			convertUnitToViewWidthBreakingPoint={convertUnitToViewWidthBreakingPoint}
		>
			{isStoryTextAdded && (
				<StoryPreviewText
					storyFontSize={storyFontSize}
					responsiveStoryFontSize={responsiveStoryFontSize}
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
		</StoryStyle>
	);
};

export default StoryPreview;
