import * as React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { StorySidebar } from "../../views/story-sidebar";
import { ActiveStory } from "../../views/active-story";

import {
	setActiveUserStoryIndex,
	setUserStoryIDsArray,
	setSelectedUserStoriesIndex,
	fetchSpecificUserStoriesArray,
} from "../../redux/story/users-stories/usersStoriesAction";

import { StoryPageStyle } from "./StoryPageStyle";

const StoryPage = () => {
	const dispatch = useDispatch();

	const { usersStoriesArray, selectedUserStoriesIndex } = useSelector(
		(state) => state.usersStoriesReducer
	);

	const userID = parseInt(useParams().userID);
	const storyID = parseInt(useParams().storyID);

	React.useEffect(() => {
		if (!usersStoriesArray) {
			dispatch(fetchSpecificUserStoriesArray(userID));
		}
	}, []);

	React.useEffect(() => {
		if (!usersStoriesArray) {
			dispatch(setSelectedUserStoriesIndex(0));
		}

		if (usersStoriesArray) {
			// REVIEW: When HomeFeedStoryUser is clicked, selectedUserStoriesIndex is setStated and we can use that value to determine which object to access
			// REVIEW: within usersStoriesArray
			const { storyIDsArray } = usersStoriesArray[selectedUserStoriesIndex];

			// REVIEW: retrieve storyID via useParams and figure out which the index of the storyID parameter within storyIDsArray
			const activeStoryIndex = storyIDsArray.indexOf(storyID);

			// REVIEW: setState activeStoryIndex => allows us to properly render out StoryProgressBar
			dispatch(setActiveUserStoryIndex(activeStoryIndex));

			// REVIEW: use this array to render/map out certain number of progress bars
			dispatch(setUserStoryIDsArray(storyIDsArray));
		}
	}, [usersStoriesArray, userID, storyID]);

	return (
		<StoryPageStyle>
			<StorySidebar />

			{usersStoriesArray && <ActiveStory />}
		</StoryPageStyle>
	);
};

export default StoryPage;
