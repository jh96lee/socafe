import React from "react";

// import { StoryTextStyle } from "../styles/StoryTextStyle";

import styled from "styled-components";

// TODO: reusable
const StoryTextStyle = styled.p`
	position: absolute;
	top: ${(props) => (props.textTop === null ? "50%" : props.textTop)};
	left: ${(props) => (props.textLeft === null ? "50%" : props.textLeft)};
	transform: ${(props) =>
		(props.textTop === null && props.textLeft === null) ||
		props.isTextTransformed
			? "translate(-50%, -50%)"
			: "none"};
	z-index: 10;
	color: ${(props) =>
		props.textColor ? props.textColor : "var(--char-default"};
	font-size: ${(props) => `${props.storyFontSize}vh`};
	font-weight: ${(props) => (props.isTextBold ? "600" : "400")};
	font-style: ${(props) => props.isTextItalic && "italic"};
	text-decoration: ${(props) => props.isTextUnderline && "underline"};

	@media (max-width: ${(props) =>
			`${props.convertUnitToViewWidthBreakingPoint}px`}) {
		font-size: ${(props) => `${props.responsiveStoryFontSize}vw`} !important;
	}
`;

const StoryText = ({
	storyText,
	storyFontSize,
	responsiveStoryFontSize,
	convertUnitToViewWidthBreakingPoint,
}) => {
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
			storyFontSize={storyFontSize}
			responsiveStoryFontSize={responsiveStoryFontSize}
			convertUnitToViewWidthBreakingPoint={convertUnitToViewWidthBreakingPoint}
		>
			{node_value}
		</StoryTextStyle>
	);
};

export default StoryText;
