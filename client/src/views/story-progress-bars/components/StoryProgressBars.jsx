import * as React from "react";
import { useSelector } from "react-redux";

import { StoryProgressBar } from "../index";

import { StoryProgressBarsStyle } from "../styles/StoryProgressBarsStyle";

const StoryProgressBars = () => {
	const { userStoryIDsArray } = useSelector(
		(state) => state.usersStoriesReducer
	);

	return (
		<StoryProgressBarsStyle>
			{userStoryIDsArray.map((storyID, idx) => {
				return <StoryProgressBar storyID={storyID} progressBarIndex={idx} />;
			})}
		</StoryProgressBarsStyle>
	);
};

export default StoryProgressBars;
