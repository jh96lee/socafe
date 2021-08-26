import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setSelectedUserStoriesIndex } from "../../../redux/story/users-stories/usersStoriesAction";
import { setViewedStories } from "../../../redux/story/viewed-stories/viewedStoriesAction";

import { updateViewedStories } from "../../../utils/story/updateViewedStories";

import {
	StoryProgressBarStyle,
	StoryProgressionBarStyle,
} from "../styles/StoryProgressBarStyle";

const StoryProgressBar = ({ progressBarIndex }) => {
	const [width, setWidth] = React.useState(0);

	const dispatch = useDispatch();

	const history = useHistory();

	const {
		usersStoriesArray,
		selectedUserStoriesIndex,
		userStoryIDsArray,
		activeUserStoryIndex,
	} = useSelector((state) => state.usersStoriesReducer);

	const { viewedStories } = useSelector((state) => state.viewedStoriesReducer);

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
							clearInterval(progressBarInterval);

							return 100;
						} else {
							return prev + 1;
						}
					});
				}, 60);
			}
		}

		return () => {
			clearInterval(progressBarInterval);
		};
	}, [activeUserStoryIndex]);

	React.useEffect(() => {
		if (activeUserStoryIndex !== null) {
			if (activeUserStoryIndex === progressBarIndex) {
				if (width >= 99) {
					if (activeUserStoryIndex === userStoryIDsArray.length - 1) {
						const updatedViewedStories = updateViewedStories(
							viewedStories,
							usersStoriesArray,
							selectedUserStoriesIndex,
							userStoryIDsArray
						);

						dispatch(setViewedStories(updatedViewedStories));

						localStorage.setItem(
							"viewedStories",
							JSON.stringify(updatedViewedStories)
						);
					}

					if (activeUserStoryIndex < userStoryIDsArray.length - 1) {
						const { storyURLsArray } =
							usersStoriesArray[selectedUserStoriesIndex];

						const nextUserStoryIndex = activeUserStoryIndex + 1;

						history.push(storyURLsArray[nextUserStoryIndex]);
					} else if (
						usersStoriesArray.length > 1 &&
						selectedUserStoriesIndex !== usersStoriesArray.length - 1
					) {
						const nextUserStoriesIndex = selectedUserStoriesIndex + 1;

						dispatch(setSelectedUserStoriesIndex(nextUserStoriesIndex));

						const { storyURLsArray } = usersStoriesArray[nextUserStoriesIndex];

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