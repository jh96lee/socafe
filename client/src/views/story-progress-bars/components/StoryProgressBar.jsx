import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSelectedUserStoriesIndex } from "../../../redux/story/story-viewership/storyViewershipAction";
import { setViewedStories } from "../../../redux/story/viewed-stories/viewedStoriesAction";

import { updateViewedStories } from "../../../utils";

import {
	StoryProgressBarStyle,
	StoryProgressionBarStyle,
} from "../styles/StoryProgressBarStyle";

const StoryProgressBar = ({ progressBarIndex }) => {
	const [width, setWidth] = React.useState(0);

	const dispatch = useDispatch();

	const history = useHistory();

	const { homeFeedStories } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { selectedUserStoriesIndex, activeUserStoryIndex } = useSelector(
		(state) => state.storyViewershipReducer
	);

	const { viewedStories } = useSelector((state) => state.viewedStoriesReducer);

	// REVIEW: this useEffect is to set up bar's UI
	React.useEffect(() => {
		let progressBarInterval;

		if (activeUserStoryIndex !== null) {
			if (activeUserStoryIndex > progressBarIndex) {
				setWidth(100);

				return;
			}

			if (activeUserStoryIndex < progressBarIndex) {
				return;
			}

			if (activeUserStoryIndex === progressBarIndex) {
				// REVIEW: progressBarInterval is an integer (id)
				progressBarInterval = setInterval(() => {
					setWidth((prev) => {
						if (prev >= 99) {
							return 100;
						} else {
							return prev + 1;
						}
					});
				}, 60);
			}
		}

		return () => {
			// REVIEW: clears interval every time activeUserStoryIndex changes
			clearInterval(progressBarInterval);
		};
	}, [activeUserStoryIndex]);

	React.useEffect(() => {
		if (activeUserStoryIndex !== null) {
			if (activeUserStoryIndex === progressBarIndex) {
				const { storyIDsArray } = homeFeedStories[selectedUserStoriesIndex];

				if (width >= 99) {
					// REVIEW: if activeUserStoryIndex reaches the end of a specific user's storyIDsArray, then update viewed stories data
					if (activeUserStoryIndex === storyIDsArray.length - 1) {
						// const updatedViewedStories = updateViewedStories(
						// 	viewedStories,
						// 	homeFeedStories,
						// 	selectedUserStoriesIndex,
						// 	storyIDsArray
						// );
						// dispatch(setViewedStories(updatedViewedStories));
						// localStorage.setItem(
						// 	"viewedStories",
						// 	JSON.stringify(updatedViewedStories)
						// );
					}

					// REVIEW: move onto the next story
					if (activeUserStoryIndex < storyIDsArray.length - 1) {
						const { storyURLsArray } =
							homeFeedStories[selectedUserStoriesIndex];

						history.push(storyURLsArray[activeUserStoryIndex + 1]);
					} else if (
						homeFeedStories.length > 1 &&
						selectedUserStoriesIndex !== homeFeedStories.length - 1
					) {
						const { storyURLsArray } =
							homeFeedStories[selectedUserStoriesIndex + 1];

						history.push(storyURLsArray[0]);
					}
				}
			}
		}
	}, [width]);

	return (
		<StoryProgressBarStyle>
			<StoryProgressionBarStyle barWidth={width} />
		</StoryProgressBarStyle>
	);
};

export default StoryProgressBar;
