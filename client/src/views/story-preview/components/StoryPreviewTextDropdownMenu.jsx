import * as React from "react";

import StoryPreviewTextDropdownColors from "./StoryPreviewTextDropdownColors";
import StoryPreviewTextDropdownStyles from "./StoryPreviewTextDropdownStyles";
import StoryPreviewTextDropdownRatios from "./StoryPreviewTextDropdownRatios";

import { StoryPreviewTextDropdownMenuStyle } from "../styles/StoryPreviewTextDropdownMenuStyle";

const StoryPreviewTextDropdownMenu = ({
	dropdownMenuID,
	storyTextContentEditableRef,
}) => {
	return (
		<StoryPreviewTextDropdownMenuStyle id={dropdownMenuID}>
			<StoryPreviewTextDropdownColors
				storyTextContentEditableRef={storyTextContentEditableRef}
			/>

			<StoryPreviewTextDropdownStyles />

			<StoryPreviewTextDropdownRatios />
		</StoryPreviewTextDropdownMenuStyle>
	);
};

export default StoryPreviewTextDropdownMenu;
