import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { IconElement } from "../../shared";
import Story from "./Story";

import { setSelectedUserStoriesIndex } from "../../../redux/story/users-stories/usersStoriesAction";
import { setViewedStories } from "../../../redux/story/viewed-stories/viewedStoriesAction";

import { ActiveStoryStyle } from "../styles/ActiveStoryStyle";

import { Left, Right } from "../../../assets";

const ActiveStory = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const {
		usersStoriesArray,
		selectedUserStoriesIndex,
		userStoryIDsArray,
		activeUserStoryIndex,
	} = useSelector((state) => state.usersStoriesReducer);

	const { activeStory } = useSelector((state) => state.activeStoryReducer);

	const { viewedStories } = useSelector((state) => state.viewedStoriesReducer);

	// TODO: LEFT ONCLICK
	const handleStoryLeftOnClick = () => {
		if (activeStory.id) {
			// REVIEW: if activeUserStoryIndex is greater than 0, that means the activeStory is not the first story within a specific user's stories array
			// REVIEW: therefore, going backwards is allowed
			if (activeUserStoryIndex > 0) {
				// REVIEW: selectedUserStoriesIndex will always be set, whether the user refreshed the page, entered Story Page URL, or clicked on HomeFeedStoryUser
				const { storyURLsArray } = usersStoriesArray[selectedUserStoriesIndex];

				const prevUserStoryIndex = activeUserStoryIndex - 1;

				history.push(storyURLsArray[prevUserStoryIndex]);
			} else if (
				// REVIEW: within usersStoriesIndex, if the current selected user index is NOT 0, that means going backwards should be allowed
				// REVIEW: also usersStoriesArray should at least longer than 1 for it to either go backwards or forwards
				usersStoriesArray.length > 1 &&
				selectedUserStoriesIndex !== 0
			) {
				const prevUserStoriesIndex = selectedUserStoriesIndex - 1;

				dispatch(setSelectedUserStoriesIndex(prevUserStoriesIndex));

				const { storyURLsArray } = usersStoriesArray[prevUserStoriesIndex];

				history.push(storyURLsArray[0]);
			}
		}
	};

	// TODO: RIGHT ONCLICK
	const handleStoryRightOnClick = () => {
		if (activeStory.id) {
			if (activeUserStoryIndex === userStoryIDsArray.length - 1) {
				const updatedViewedStories = { ...viewedStories };

				const { storyOwner, storyIDsArray } =
					usersStoriesArray[selectedUserStoriesIndex];

				const viewedStoryOwnerUsername = storyOwner.username;

				if (!viewedStories[viewedStoryOwnerUsername]) {
					updatedViewedStories[viewedStoryOwnerUsername] = storyIDsArray;
				} else {
					for (let i = 0; i < storyIDsArray.length; i++) {
						const recentlyViewedStoryID = userStoryIDsArray[i];

						const indexOfRecentlyViewedStoryID = viewedStories[
							viewedStoryOwnerUsername
						].indexOf(recentlyViewedStoryID);

						if (indexOfRecentlyViewedStoryID === -1) {
							updatedViewedStories[viewedStoryOwnerUsername].push(
								recentlyViewedStoryID
							);
						} else {
							continue;
						}
					}
				}

				dispatch(setViewedStories(updatedViewedStories));

				localStorage.setItem(
					"viewedStories",
					JSON.stringify(updatedViewedStories)
				);
			}

			// REVIEW: activeUserStoryIndex MUST be less than the following value for it to move onto the next story
			if (activeUserStoryIndex < userStoryIDsArray.length - 1) {
				const { storyURLsArray } = usersStoriesArray[selectedUserStoriesIndex];

				const nextUserStoryIndex = activeUserStoryIndex + 1;

				history.push(storyURLsArray[nextUserStoryIndex]);
				// REVIEW: this means that the user got to StoryPage via clicking on HomeFeedStory at homefeed
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
	};

	return (
		<ActiveStoryStyle>
			<IconElement onClick={handleStoryLeftOnClick}>
				<Left />
			</IconElement>

			<Story />

			<IconElement onClick={handleStoryRightOnClick}>
				<Right />
			</IconElement>
		</ActiveStoryStyle>
	);
};

export default ActiveStory;
