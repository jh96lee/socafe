import * as React from "react";

const useStory = (
	storyRef,
	storyTextSizeRatio,
	convertUnitToViewWidthBreakingPoint
) => {
	const [storyWidth, setStoryWidth] = React.useState();
	const [storyHeight, setStoryHeight] = React.useState();
	const [storyFontSize, setStoryFontSize] = React.useState();
	const [responsiveStoryWidth, setResponsiveStoryWidth] = React.useState();
	const [responsiveStoryHeight, setResponsiveStoryHeight] = React.useState();
	const [responsiveStoryFontSize, setResponsiveStoryFontSize] =
		React.useState();

	React.useEffect(() => {
		const windowHeight = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		);

		console.log("CALC");

		// REVIEW: pixels unit
		const storyParentHeight = storyRef.current.parentNode.clientHeight;

		const storyHeightInPixels = storyParentHeight * 0.9;
		const storyWidthInPixels = (storyHeightInPixels * 3.3) / 5;
		// REVIEW: fixed
		const storyFontSizeInPixels = storyHeightInPixels * storyTextSizeRatio;

		const storyWidthInViewHeight = storyWidthInPixels / (windowHeight / 100);
		const storyHeightInViewHeight = storyHeightInPixels / (windowHeight / 100);
		const storyTextFontSizeInViewHeight =
			storyFontSizeInPixels / (windowHeight / 100);

		const responsiveStoryWidthInViewWidth =
			storyWidthInPixels / (convertUnitToViewWidthBreakingPoint / 100);
		const responsiveStoryHeightInViewWidth =
			storyHeightInPixels / (convertUnitToViewWidthBreakingPoint / 100);
		const responsiveStoryFontSizeInViewWidth =
			storyFontSizeInPixels / (convertUnitToViewWidthBreakingPoint / 100);

		setStoryWidth(storyWidthInViewHeight);
		setStoryHeight(storyHeightInViewHeight);
		setStoryFontSize(storyTextFontSizeInViewHeight);

		setResponsiveStoryWidth(responsiveStoryWidthInViewWidth);
		setResponsiveStoryHeight(responsiveStoryHeightInViewWidth);
		setResponsiveStoryFontSize(responsiveStoryFontSizeInViewWidth);
	}, [storyTextSizeRatio]);

	return {
		storyWidth,
		storyHeight,
		storyFontSize,
		responsiveStoryWidth,
		responsiveStoryHeight,
		responsiveStoryFontSize,
	};
};

export default useStory;
