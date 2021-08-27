import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { StorySidebar } from "../../views/story-sidebar";
import { ActiveStory } from "../../views/active-story";

import { fetchCurrentUserStories } from "../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";
import {
	setSelectedUserStoriesIndex,
	setActiveUserStoryIndex,
} from "../../redux/story/story-viewership/storyViewershipAction";

import { StoryPageStyle } from "./StoryPageStyle";

const StoryPage = () => {
	const dispatch = useDispatch();

	const { homeFeedStoriesArray } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { selectedUserStoriesIndex } = useSelector(
		(state) => state.storyViewershipReducer
	);

	const userID = parseInt(useParams().userID);
	const storyID = parseInt(useParams().storyID);

	React.useEffect(() => {
		// REVIEW: if homeFeedStoriesArray does not exist because the user either refreshed the page or entered the URL directly,
		// REVIEW: use the userID param and fetch the user's stories
		if (!homeFeedStoriesArray) {
			dispatch(fetchCurrentUserStories(userID));
		}
	}, []);

	React.useEffect(() => {
		if (!homeFeedStoriesArray) {
			dispatch(setSelectedUserStoriesIndex(0));
		}

		if (homeFeedStoriesArray) {
			// REVIEW: retrieve storyID via useParams and figure out which the index of the storyID parameter within storyIDsArray
			const activeStoryIndex =
				homeFeedStoriesArray[selectedUserStoriesIndex].storyIDsArray.indexOf(
					storyID
				);

			// REVIEW: setState activeStoryIndex => allows us to properly render out StoryProgressBar
			dispatch(setActiveUserStoryIndex(activeStoryIndex));
		}
	}, [homeFeedStoriesArray, userID, storyID]);

	return (
		<StoryPageStyle>
			<StorySidebar />

			{homeFeedStoriesArray && <ActiveStory />}
		</StoryPageStyle>
	);
};

export default StoryPage;
