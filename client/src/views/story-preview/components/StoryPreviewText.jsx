import React from "react";
import { useSelector, useDispatch } from "react-redux";

import StoryPreviewTextDropdownMenu from "./StoryPreviewTextDropdownMenu";

import {
	setStoryTextContent,
	setStoryTextTop,
	setStoryTextLeft,
	setIsTextTransformed,
	resetStoryText,
} from "../../../redux/add-story/story-text/storyTextAction";

import { useDropdown } from "../../../hooks";

import {
	StoryPreviewTextStyle,
	StoryPreviewTextContentEditableStyle,
} from "../styles/StoryPreviewTextStyle";

const StoryPreviewText = ({
	storyFontSize,
	responsiveStoryFontSize,
	draggableElementRef,
	handleDraggableOnMouseDown,
	convertUnitToViewWidthBreakingPoint,
}) => {
	const dispatch = useDispatch();

	const {
		textColorsArray,
		isBold,
		isItalic,
		isUnderline,
		selectedTextColorIndex,
	} = useSelector((state) => state.storyTextReducer);

	const { isDropdownMenuOpen } = useDropdown(
		"story-text",
		"story-text-dropdown-menu",
		false
	);

	const handleContentEditableOnKeydown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
		}

		const totalCharacters = e.target.textContent.length;

		if (totalCharacters > 100) {
			if (e.key === "Backspace") {
				return;
			} else {
				e.preventDefault();
			}
		}
	};

	const handleContentEditableOnInput = (e) => {
		const totalCharacters = e.target.textContent.length;

		if (totalCharacters < 100) {
			dispatch(setStoryTextContent(e.target.textContent));
		}
	};

	const storyTextContentEditableRef = React.useRef();

	React.useEffect(() => {
		if (isBold) {
			storyTextContentEditableRef.current.style.fontWeight = 600;
		} else {
			storyTextContentEditableRef.current.style.fontWeight = 400;
		}

		if (isItalic) {
			storyTextContentEditableRef.current.style.fontStyle = "italic";
		} else {
			storyTextContentEditableRef.current.style.fontStyle = "normal";
		}

		if (isUnderline) {
			storyTextContentEditableRef.current.style.textDecoration = "underline";
		} else {
			storyTextContentEditableRef.current.style.textDecoration = "none";
		}
	}, [dispatch, isBold, isItalic, isUnderline]);

	React.useEffect(() => {
		draggableElementRef.current.style.top = "50%";

		draggableElementRef.current.style.left = "50%";

		draggableElementRef.current.style.transform = "translate(-50%, -50%)";

		storyTextContentEditableRef.current.style.color =
			textColorsArray[selectedTextColorIndex];

		return () => {
			dispatch(resetStoryText());

			dispatch(setStoryTextTop(null));

			dispatch(setStoryTextLeft(null));

			dispatch(setIsTextTransformed(null));
		};
	}, []);

	return (
		<StoryPreviewTextStyle
			id="story-text"
			ref={draggableElementRef}
			onMouseDown={handleDraggableOnMouseDown}
			convertUnitToViewWidthBreakingPoint={convertUnitToViewWidthBreakingPoint}
		>
			<StoryPreviewTextContentEditableStyle
				id="story-text__child"
				ref={storyTextContentEditableRef}
				contentEditable={true}
				placeholder="Start typing here"
				onKeyDown={handleContentEditableOnKeydown}
				onInput={handleContentEditableOnInput}
				onMouseDown={handleDraggableOnMouseDown}
				storyFontSize={storyFontSize}
				responsiveStoryFontSize={responsiveStoryFontSize}
			/>

			{isDropdownMenuOpen && (
				<StoryPreviewTextDropdownMenu
					dropdownMenuID="story-text-dropdown-menu"
					storyTextContentEditableRef={storyTextContentEditableRef}
				/>
			)}
		</StoryPreviewTextStyle>
	);
};

export default StoryPreviewText;
