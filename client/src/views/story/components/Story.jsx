import * as React from "react";

import StoryImage from "./StoryImage";
import StoryText from "./StoryText";

import { convertPixelsToViewWidth } from "../../../utils/story/convertPixelsToViewWidth";

import { StoryStyle } from "../styles/StoryStyle";

const Story = ({ story }) => {
	const { story_background, story_image, story_text } = story;

	const storyRef = React.useRef();

	return (
		<StoryStyle
			ref={storyRef}
			storyBackground={
				story.story_background && story_background.background_gradient
			}
			responsiveStoryWidth={convertPixelsToViewWidth("480px", 600)}
			responsiveStoryHeight={convertPixelsToViewWidth("720px", 600)}
		>
			{story_image && <StoryImage storyImage={story_image} />}

			{story_text && <StoryText storyText={story_text} />}
		</StoryStyle>
	);
};

export default Story;
