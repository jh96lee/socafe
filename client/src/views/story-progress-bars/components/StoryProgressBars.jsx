import * as React from "react";
import { useSelector } from "react-redux";

import { StoryProgressBar } from "../index";

import { StoryProgressBarsStyle } from "../styles/StoryProgressBarsStyle";

const StoryProgressBars = () => {
	const { homeFeedStoriesArray } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { selectedUserStoriesIndex } = useSelector(
		(state) => state.storyViewershipReducer
	);

	return (
		<StoryProgressBarsStyle>
			{homeFeedStoriesArray[selectedUserStoriesIndex].storyIDsArray.map(
				(storyID, idx) => {
					return <StoryProgressBar storyID={storyID} progressBarIndex={idx} />;
				}
			)}
		</StoryProgressBarsStyle>
	);
};

export default StoryProgressBars;
