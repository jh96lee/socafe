import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	setIsBold,
	setIsItalic,
	setIsUnderline,
} from "../../../redux/add-story/story-text/storyTextAction";

import { StoryTextEditingStyle } from "../styles/StoryTextEditingStyle";
import { StoryPreviewTextDropdownStylesStyle } from "../styles/StoryPreviewTextDropdownStylesStyle";

import { Bold, Underline, Italics } from "../../../assets";

const StoryPreviewTextDropdownStyles = () => {
	const dispatch = useDispatch();

	const { isBold, isItalic, isUnderline } = useSelector(
		(state) => state.storyTextReducer
	);

	const handleBoldIconOnClick = () => {
		dispatch(setIsBold());
	};

	const handleItalicIconOnClick = () => {
		dispatch(setIsItalic());
	};

	const handleUnderlineIconOnClick = () => {
		dispatch(setIsUnderline());
	};

	return (
		<StoryTextEditingStyle>
			<h6>Styles</h6>

			<StoryPreviewTextDropdownStylesStyle>
				<Bold className={isBold && "active"} onClick={handleBoldIconOnClick} />

				<Italics
					className={isItalic && "active"}
					onClick={handleItalicIconOnClick}
				/>

				<Underline
					className={isUnderline && "active"}
					onClick={handleUnderlineIconOnClick}
				/>
			</StoryPreviewTextDropdownStylesStyle>
		</StoryTextEditingStyle>
	);
};

export default StoryPreviewTextDropdownStyles;
