import React from "react";

import { StoryImageStyle } from "../styles/StoryImageStyle";

const StoryImage = ({ storyImage }) => {
	const {
		image_url,
		image_height,
		image_width,
		story_image_top,
		story_image_left,
		story_is_image_transformed,
	} = storyImage;

	return (
		<StoryImageStyle
			src={image_url}
			isImageTall={image_height > image_width}
			imageTop={story_image_top}
			imageLeft={story_image_left}
			isImageTransformed={story_is_image_transformed}
		></StoryImageStyle>
	);
};

export default StoryImage;
