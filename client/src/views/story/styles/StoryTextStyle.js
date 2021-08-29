import styled from "styled-components";

export const StoryTextStyle = styled.p`
	position: absolute;
	top: ${(props) => (props.textTop === null ? "50%" : props.textTop)};
	left: ${(props) => (props.textLeft === null ? "50%" : props.textLeft)};
	transform: ${(props) =>
		(props.textTop === null && props.textLeft === null) ||
		props.isTextTransformed
			? "translate(-50%, -50%)"
			: "none"};
	z-index: 10;
	color: ${(props) => (props.textColor ? props.textColor : "var(--text-1")};
	font-size: ${(props) => props.textSize};
	font-weight: ${(props) => (props.isTextBold ? "600" : "400")};
	font-style: ${(props) => props.isTextItalic && "italic"};
	text-decoration: ${(props) => props.isTextUnderline && "underline"};
	/* padding: 1rem; */

	font-size: ${(props) => props.storyPreviewTextSize};

	@media (max-width: 600px) {
		font-size: ${(props) => props.responsiveStoryTextSize};
	}
`;
