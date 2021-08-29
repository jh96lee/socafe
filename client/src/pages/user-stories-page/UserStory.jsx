import React from "react";
import styled from "styled-components";

const StoryStyle = styled.div`
	position: relative;
	background: ${(props) => props.storyBackground};
	/* REVIEW: by setting the width in vh unit, we can prevent the width from changing when the width of the viewport decreases */
	width: ${(props) => `${props.storyWidth}vh`};
	height: ${(props) => `${props.storyHeight}vh`};
	margin: auto;
	border-radius: 1rem;
	border: 2px solid var(--separator-2);

	@media (max-width: ${(props) =>
			`${props.convertUnitToViewWidthBreakingPoint}px`}) {
		width: ${(props) => `${props.responsiveStoryWidth}vw`} !important;
		height: ${(props) => `${props.responsiveStoryHeight}vw`} !important;
	}
`;

const StoryImageStyle = styled.img`
	position: absolute;
	top: ${(props) => (props.imageTop === null ? "50%" : props.imageTop)};
	left: ${(props) => (props.imageLeft === null ? "50%" : props.imageLeft)};
	transform: ${(props) =>
		(props.imageTop === null && props.imageLeft === null) ||
		props.isImageTransformed
			? "translate(-50%, -50%)"
			: "none"};
	width: ${(props) => (props.isImageTall ? "auto" : "90%")};
	height: ${(props) => (props.isImageTall ? "90%" : "auto")};
	object-fit: cover;
	border-radius: 1rem;
`;

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
	color: ${(props) => (props.textColor ? props.textColor : "var(--text-1")};
	font-size: ${(props) => props.textSize};
	font-weight: ${(props) => (props.isTextBold ? "600" : "400")};
	font-style: ${(props) => props.isTextItalic && "italic"};
	text-decoration: ${(props) => props.isTextUnderline && "underline"};

	@media (max-width: ${(props) =>
			`${props.convertUnitToViewWidthBreakingPoint}px`}) {
		font-size: ${(props) => `${props.responsiveStoryFontSize}vw`} !important;
	}
`;

const UserStory = ({
	story,
	storyHeightProp,
	convertUnitToViewWidthBreakingPoint = 600,
}) => {
	const [storyWidth, setStoryWidth] = React.useState();
	const [storyHeight, setStoryHeight] = React.useState();
	const [responsiveStoryWidth, setResponsiveStoryWidth] = React.useState();
	const [responsiveStoryHeight, setResponsiveStoryHeight] = React.useState();
	const [responsiveStoryFontSize, setResponsiveStoryFontSize] =
		React.useState();

	const { story_background, story_image, story_text } = story;

	const userStoryRef = React.useRef();

	React.useLayoutEffect(() => {
		const windowHeight = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		);

		// REVIEW: pixels unit
		const storyParentHeight = userStoryRef.current.parentNode.clientHeight;

		const storyHeightInPixels = storyParentHeight * 0.9;
		const storyWidthInPixels = (storyHeightInPixels * 3.3) / 5;
		// FIX
		const storyFontSizeInPixels = (windowHeight * 2.8) / 100;

		const storyHeightInViewHeight = storyHeightInPixels / (windowHeight / 100);
		const storyWidthInViewWidth = (storyHeightInViewHeight * 3.3) / 5;

		const responsiveStoryWidthInViewWidth =
			storyWidthInPixels / (convertUnitToViewWidthBreakingPoint / 100);
		const responsiveStoryHeightInViewWidth =
			storyHeightInPixels / (convertUnitToViewWidthBreakingPoint / 100);
		const responsiveStoryFontSizeInViewWidth =
			storyFontSizeInPixels / (convertUnitToViewWidthBreakingPoint / 100);

		setStoryWidth(storyWidthInViewWidth);
		setStoryHeight(storyHeightInViewHeight);

		setResponsiveStoryWidth(responsiveStoryWidthInViewWidth);
		setResponsiveStoryHeight(responsiveStoryHeightInViewWidth);
		setResponsiveStoryFontSize(responsiveStoryFontSizeInViewWidth);
	}, []);

	return (
		<StoryStyle
			ref={userStoryRef}
			storyBackground={story_background.background_gradient}
			storyWidth={storyWidth}
			storyHeight={storyHeight}
			responsiveStoryWidth={responsiveStoryWidth}
			responsiveStoryHeight={responsiveStoryHeight}
			convertUnitToViewWidthBreakingPoint={convertUnitToViewWidthBreakingPoint}
		>
			{story_image && (
				<StoryImageStyle
					isImageTall={story_image.image_height > story_image.image_width}
					imageTop={story_image.story_image_top}
					imageLeft={story_image.story_image_left}
					isImageTransformed={story_image.story_is_image_transformed}
					src={story_image.image_url}
					alt="story"
				/>
			)}

			{story_text && (
				<StoryTextStyle
					isTextBold={story_text.story_text_is_bold}
					isTextItalic={story_text.story_text_is_italic}
					isTextUnderline={story_text.story_text_is_underline}
					textTop={story_text.story_text_top}
					textLeft={story_text.story_text_left}
					// FIX
					textSize={"2.8vh"}
					isTextTransformed={story_text.story_is_text_transformed}
					textColor={story_text.story_text_color}
					responsiveStoryFontSize={responsiveStoryFontSize}
					convertUnitToViewWidthBreakingPoint={
						convertUnitToViewWidthBreakingPoint
					}
				>
					{story_text.node_value}
				</StoryTextStyle>
			)}
		</StoryStyle>
	);
};

export default UserStory;
