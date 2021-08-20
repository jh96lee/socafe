import React from "react";
import styled from "styled-components";

const StoryImageStyle = styled.img`
	position: absolute;
	/* REVIEW: if one of imageTop or imageLeft is NULL, then top and left will always be 50% with appropriate transform property */
	top: ${(props) => (props.imageTop === null ? "50%" : props.imageTop)};
	left: ${(props) => (props.imageLeft === null ? "50%" : props.imageLeft)};
	transform: ${(props) =>
		(props.imageTop === null && props.imageLeft === null) ||
		props.isImageTransformed
			? "translate(-50%, -50%)"
			: "none"};
	width: ${(props) => (props.isImageTall ? "auto" : "90%")};
	height: ${(props) => (props.isImageTall ? "90%" : "auto")};
	border-radius: 1rem;
	object-fit: cover;
`;

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
