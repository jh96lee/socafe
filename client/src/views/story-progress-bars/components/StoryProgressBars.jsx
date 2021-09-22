import * as React from "react";
import { useSelector } from "react-redux";

import { StoryProgressBar } from "../index";

import { StoryProgressBarsStyle } from "../styles/StoryProgressBarsStyle";

const StoryProgressBars = () => {
	const { homeFeedStories } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { selectedUserStoriesIndex } = useSelector(
		(state) => state.storyViewershipReducer
	);

	// REVIEW: retrieve storyIDsArray
	const { storyIDsArray } = homeFeedStories[selectedUserStoriesIndex];

	return (
		<StoryProgressBarsStyle>
			{storyIDsArray.map((storyID, idx) => {
				return <StoryProgressBar storyID={storyID} progressBarIndex={idx} />;
			})}
		</StoryProgressBarsStyle>
	);
};

export default StoryProgressBars;
