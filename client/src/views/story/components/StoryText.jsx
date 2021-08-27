import React from "react";

import { convertPixelsToViewWidth } from "../../../utils/story/convertPixelsToViewWidth";

import { StoryTextStyle } from "../styles/StoryTextStyle";

const StoryText = ({ storyText }) => {
	const {
		node_value,
		story_text_is_bold,
		story_text_is_italic,
		story_text_is_underline,
		story_text_top,
		story_text_left,
		story_text_size,
		story_text_color,
		story_is_text_transformed,
	} = storyText;

	return (
		<StoryTextStyle
			isTextBold={story_text_is_bold}
			isTextItalic={story_text_is_italic}
			isTextUnderline={story_text_is_underline}
			textTop={story_text_top}
			textLeft={story_text_left}
			textSize={story_text_size}
			isTextTransformed={story_is_text_transformed}
			textColor={story_text_color}
			storyPreviewTextSize={story_text_size}
			responsiveStoryTextSize={convertPixelsToViewWidth(story_text_size, 600)}
		>
			{node_value}
		</StoryTextStyle>
	);
};

export default StoryText;
