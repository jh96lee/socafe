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

const StoryPreview = ({ convertUnitToViewWidthBreakingPoint }) => {
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

		const { width: storyPreviewWidth, height: storyPreviewHeight } =
			storyPreviewRef.current.getBoundingClientRect();

		draggableElementRef.current.style.left = `${
			((e.clientX - storyPreviewRef.current.offsetLeft - draggableClickedX) /
				storyPreviewWidth) *
			100
		}%`;

		draggableElementRef.current.style.top = `${
			((e.clientY - storyPreviewRef.current.offsetTop - draggableClickedY) /
				storyPreviewHeight) *
			100
		}%`;
	};

	// REVIEW: set what the draggable element is
	const handleDraggableOnMouseDown = (e) => {
		if (
			e.target.id !== "story-text" &&
			e.target.id !== "story-text__child" &&
			e.target.id !== "story-image" &&
			e.target.id !== "story-image__child"
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

		const { x, y } = draggableElementRef.current.getBoundingClientRect();

		draggableClickedX = e.clientX - x;
		draggableClickedY = e.clientY - y;

		storyPreviewRef.current.addEventListener(
			"mousemove",
			mouseMoveEventHandler
		);
	};

	// REVIEW: set state top and left values
	const handleStoryPreviewOnMouseUp = (e) => {
		if (
			!draggableElementRef.current ||
			(e.target.id !== "story-text" &&
				e.target.id !== "story-text__child" &&
				e.target.id !== "story-image" &&
				e.target.id !== "story-image__child")
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
			onMouseUp={handleStoryPreviewOnMouseUp}
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
					convertUnitToViewWidthBreakingPoint={
						convertUnitToViewWidthBreakingPoint
					}
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
