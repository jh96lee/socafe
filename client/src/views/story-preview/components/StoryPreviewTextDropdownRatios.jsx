import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedTextSizeRatioIndex } from "../../../redux/add-story/story-text/storyTextAction";

import { StoryTextEditingStyle } from "../styles/StoryTextEditingStyle";
import { StoryPreviewTextDropdownRatiosStyle } from "../styles/StoryPreviewTextDropdownRatiosStyle";

const StoryPreviewTextDropdownRatios = () => {
	const dispatch = useDispatch();

	const { textSizeRatiosArray, selectedTextSizeRatioIndex } = useSelector(
		(state) => state.storyTextReducer
	);

	return (
		<StoryTextEditingStyle>
			<h6>Size</h6>

			<StoryPreviewTextDropdownRatiosStyle>
				{textSizeRatiosArray.map(({ label }, idx) => {
					return (
						<h5
							className={selectedTextSizeRatioIndex === idx && "active"}
							onClick={() => {
								dispatch(setSelectedTextSizeRatioIndex(idx));
							}}
						>
							{label}
						</h5>
					);
				})}
			</StoryPreviewTextDropdownRatiosStyle>
		</StoryTextEditingStyle>
	);
};

export default StoryPreviewTextDropdownRatios;
