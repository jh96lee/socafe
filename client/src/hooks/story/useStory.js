import * as React from "react";

const useStory = (
	storyRef,
	storyTextSizeRatio,
	convertUnitToViewWidthBreakingPoint,
	storyParentHeightProp
) => {
	const [storyWidth, setStoryWidth] = React.useState();
	const [storyHeight, setStoryHeight] = React.useState();
	const [storyFontSize, setStoryFontSize] = React.useState();
	const [responsiveStoryWidth, setResponsiveStoryWidth] = React.useState();
	const [responsiveStoryHeight, setResponsiveStoryHeight] = React.useState();
	const [responsiveStoryFontSize, setResponsiveStoryFontSize] =
		React.useState();

	const useStoryUseEffectDependencyArray = storyTextSizeRatio
		? [storyTextSizeRatio]
		: [];

	React.useEffect(() => {
		const windowHeight = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		);

		let storyPageNode = storyRef.current;

		while (storyPageNode) {
			if (storyPageNode.parentNode.id.split("-").includes("page")) {
				storyPageNode = storyPageNode.parentNode;

				break;
			}

			storyPageNode = storyPageNode.parentNode;
		}

		// REVIEW: pixels unit
		const storyParentHeight = storyParentHeightProp
			? storyParentHeightProp
			: storyPageNode.clientHeight;

		const storyHeightInPixels = storyParentHeight * 0.9;
		const storyWidthInPixels = (storyHeightInPixels * 3.3) / 5;

		const storyWidthInViewHeight = storyWidthInPixels / (windowHeight / 100);
		const storyHeightInViewHeight = storyHeightInPixels / (windowHeight / 100);

		const responsiveStoryWidthInViewWidth =
			storyWidthInPixels / (convertUnitToViewWidthBreakingPoint / 100);
		const responsiveStoryHeightInViewWidth =
			storyHeightInPixels / (convertUnitToViewWidthBreakingPoint / 100);

		if (storyTextSizeRatio) {
			// REVIEW: fixed
			const storyFontSizeInPixels = storyHeightInPixels * storyTextSizeRatio;

			const storyTextFontSizeInViewHeight =
				storyFontSizeInPixels / (windowHeight / 100);

			const responsiveStoryFontSizeInViewWidth =
				storyFontSizeInPixels / (convertUnitToViewWidthBreakingPoint / 100);

			setStoryFontSize(storyTextFontSizeInViewHeight);
			setResponsiveStoryFontSize(responsiveStoryFontSizeInViewWidth);
		}

		setStoryWidth(storyWidthInViewHeight);
		setStoryHeight(storyHeightInViewHeight);

		setResponsiveStoryWidth(responsiveStoryWidthInViewWidth);
		setResponsiveStoryHeight(responsiveStoryHeightInViewWidth);
	}, useStoryUseEffectDependencyArray);

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
