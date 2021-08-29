import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedTextColorIndex } from "../../../redux/add-story/story-text/storyTextAction";

import { StoryTextEditingStyle } from "../styles/StoryTextEditingStyle";
import {
	StoryPreviewTextDropdownColorsStyle,
	StoryPreviewTextDropdownColorStyle,
} from "../styles/StoryPreviewTextDropdownColorsStyle";

const StoryPreviewTextDropdownColors = ({ storyTextContentEditableRef }) => {
	const dispatch = useDispatch();

	const { textColorsArray } = useSelector((state) => state.storyTextReducer);

	return (
		<StoryTextEditingStyle>
			<h6>Text Color</h6>

			<StoryPreviewTextDropdownColorsStyle>
				{textColorsArray.map((color, idx) => (
					<StoryPreviewTextDropdownColorStyle
						storyTextColor={color}
						onClick={() => {
							storyTextContentEditableRef.current.style.color =
								textColorsArray[idx];

							dispatch(setSelectedTextColorIndex(idx));
						}}
					/>
				))}
			</StoryPreviewTextDropdownColorsStyle>
		</StoryTextEditingStyle>
	);
};

export default StoryPreviewTextDropdownColors;
