import React from "react";
import styled from "styled-components";

const StoryTextStyle = styled.p`
	position: absolute;
	top: ${(props) => (props.textTop === null ? "50%" : props.textTop)};
	left: ${(props) => (props.textLeft === null ? "50%" : props.textLeft)};
	transform: ${(props) =>
		props.textTop === null && props.textLeft === null
			? "translate(-50%, -50%)"
			: "none"};
	z-index: 10;
	color: ${(props) => (props.textColor ? props.textColor : "var(--text-1")};
	font-size: ${(props) => props.textSize};
	font-weight: ${(props) => (props.isTextBold ? "600" : "400")};
	font-style: ${(props) => props.isTextItalic && "italic"};
	text-decoration: ${(props) => props.isTextUnderline && "underline"};
	padding: 1rem;
`;

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
	} = storyText;

	return (
		<StoryTextStyle
			isTextBold={story_text_is_bold}
			isTextItalic={story_text_is_italic}
			isTextUnderline={story_text_is_underline}
			textTop={story_text_top}
			textLeft={story_text_left}
			textSize={story_text_size}
			textColor={story_text_color}
		>
			{node_value}
		</StoryTextStyle>
	);
};

export default StoryText;
