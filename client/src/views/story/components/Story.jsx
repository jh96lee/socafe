import * as React from "react";

import StoryImage from "./StoryImage";
import StoryText from "./StoryText";

import { useStory } from "../../../hooks";

import { StoryStyle } from "../../../styles";

const Story = ({ story, convertUnitToViewWidthBreakingPoint }) => {
	const { story_background, story_image, story_text } = story;

	const storyRef = React.useRef();

	const {
		storyWidth,
		storyHeight,
		storyFontSize,
		responsiveStoryWidth,
		responsiveStoryHeight,
		responsiveStoryFontSize,
	} = useStory(
		storyRef,
		story_text ? story_text.story_text_size_ratio : null,
		convertUnitToViewWidthBreakingPoint
	);

	return (
		<StoryStyle
			ref={storyRef}
			storyBackground={
				story.story_background && story_background.background_gradient
			}
			storyWidth={storyWidth}
			storyHeight={storyHeight}
			responsiveStoryWidth={responsiveStoryWidth}
			responsiveStoryHeight={responsiveStoryHeight}
			convertUnitToViewWidthBreakingPoint={convertUnitToViewWidthBreakingPoint}
		>
			{story_image && <StoryImage storyImage={story_image} />}

			{story_text && (
				<StoryText
					storyText={story_text}
					storyFontSize={storyFontSize}
					responsiveStoryFontSize={responsiveStoryFontSize}
					convertUnitToViewWidthBreakingPoint={
						convertUnitToViewWidthBreakingPoint
					}
				/>
			)}
		</StoryStyle>
	);
};

export default Story;
