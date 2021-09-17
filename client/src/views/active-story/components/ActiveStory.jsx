import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { IconElement, UserMetadata, Loader } from "../../shared";
import { Story } from "../../story";
import { StoryProgressBars } from "../../story-progress-bars";

import { setSelectedUserStoriesIndex } from "../../../redux/story/story-viewership/storyViewershipAction";
import { setViewedStories } from "../../../redux/story/viewed-stories/viewedStoriesAction";
import { fetchActiveStory } from "../../../redux/story/active-story/activeStoryAction";

import { convertDate, updateViewedStories } from "../../../utils";

import { ActiveStoryStyle } from "../styles/ActiveStoryStyle";
import { ActiveStoryHeaderStyle } from "../styles/ActiveStoryHeaderStyle";
import { ActiveStoryDirectionsStyle } from "../styles/ActiveStoryDirectionsStyle";

import { Left, Right } from "../../../assets";

const ActiveStory = ({ convertUnitToViewWidthBreakingPoint }) => {
	const dispatch = useDispatch();

	const history = useHistory();

	const storyID = parseInt(useParams().storyID);
	const ownerID = parseInt(useParams().userID);

	React.useEffect(() => {
		dispatch(fetchActiveStory(storyID, ownerID));
	}, [storyID]);

	const { activeStory, isActiveStoryLoaded } = useSelector(
		(state) => state.activeStoryReducer
	);

	const { homeFeedStoriesArray } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { selectedUserStoriesIndex, activeUserStoryIndex } = useSelector(
		(state) => state.storyViewershipReducer
	);

	const { viewedStories } = useSelector((state) => state.viewedStoriesReducer);

	// TODO: LEFT ONCLICK
	const handleStoryLeftOnClick = () => {
		if (activeStory.id) {
			// REVIEW: if activeUserStoryIndex is greater than 0, that means the activeStory is not the first story within a specific user's stories array
			// REVIEW: therefore, going backwards is allowed
			if (activeUserStoryIndex > 0) {
				// REVIEW: selectedUserStoriesIndex will always be set, whether the user refreshed the page, entered Story Page URL, or clicked on HomeFeedStoryUser
				const { storyURLsArray } =
					homeFeedStoriesArray[selectedUserStoriesIndex];

				const prevUserStoryIndex = activeUserStoryIndex - 1;

				history.push(storyURLsArray[prevUserStoryIndex]);
			} else if (
				// REVIEW: within usersStoriesIndex, if the current selected user index is NOT 0, that means going backwards should be allowed
				// REVIEW: also usersStoriesArray should at least longer than 1 for it to either go backwards or forwards
				homeFeedStoriesArray.length > 1 &&
				selectedUserStoriesIndex !== 0
			) {
				const prevUserStoriesIndex = selectedUserStoriesIndex - 1;

				dispatch(setSelectedUserStoriesIndex(prevUserStoriesIndex));

				const { storyURLsArray } = homeFeedStoriesArray[prevUserStoriesIndex];

				history.push(storyURLsArray[0]);
			}
		}
	};

	// TODO: RIGHT ONCLICK
	const handleStoryRightOnClick = () => {
		if (activeStory.id) {
			const { storyIDsArray } = homeFeedStoriesArray[selectedUserStoriesIndex];

			if (activeUserStoryIndex === storyIDsArray.length - 1) {
				const updatedViewedStories = updateViewedStories(
					viewedStories,
					homeFeedStoriesArray,
					selectedUserStoriesIndex,
					homeFeedStoriesArray[selectedUserStoriesIndex].storyIDsArray
				);

				dispatch(setViewedStories(updatedViewedStories));

				localStorage.setItem(
					"viewedStories",
					JSON.stringify(updatedViewedStories)
				);
			}

			// REVIEW: activeUserStoryIndex MUST be less than the following value for it to move onto the next story
			if (activeUserStoryIndex < storyIDsArray.length - 1) {
				const { storyURLsArray } =
					homeFeedStoriesArray[selectedUserStoriesIndex];

				const nextUserStoryIndex = activeUserStoryIndex + 1;

				history.push(storyURLsArray[nextUserStoryIndex]);
			} else if (
				homeFeedStoriesArray.length > 1 &&
				selectedUserStoriesIndex !== homeFeedStoriesArray.length - 1
			) {
				const nextUserStoriesIndex = selectedUserStoriesIndex + 1;

				dispatch(setSelectedUserStoriesIndex(nextUserStoriesIndex));

				const { storyURLsArray } = homeFeedStoriesArray[nextUserStoriesIndex];

				history.push(storyURLsArray[0]);
			}
		}
	};

	return (
		<ActiveStoryStyle>
			{isActiveStoryLoaded ? (
				<React.Fragment>
					<ActiveStoryHeaderStyle>
						<StoryProgressBars />

						<UserMetadata
							userID={activeStory.story_owner.id}
							avatarURL={activeStory.story_owner.avatar_url}
							username={activeStory.story_owner.username}
							text={activeStory.story_owner.username}
							subText={convertDate(activeStory.created_at)}
							avatarSize="4.5rem"
							userMetadataStyleObject={{
								userMetadataTextColor: "#fff",
								userMetadataSubTextColor: "#fff",
							}}
						/>
					</ActiveStoryHeaderStyle>

					{console.log(activeStory)}

					<Story
						story={activeStory}
						convertUnitToViewWidthBreakingPoint={
							convertUnitToViewWidthBreakingPoint
						}
					/>

					<ActiveStoryDirectionsStyle>
						<IconElement
							onClick={handleStoryLeftOnClick}
							iconElementStyleObject={{
								elementBackgroundColor: "#0000004a",
								iconSize: "2.5rem",
							}}
						>
							<Left />
						</IconElement>

						<IconElement
							onClick={handleStoryRightOnClick}
							iconElementStyleObject={{
								elementBackgroundColor: "#0000004a",
								iconSize: "2.5rem",
							}}
						>
							<Right />
						</IconElement>
					</ActiveStoryDirectionsStyle>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</ActiveStoryStyle>
	);
};

export default ActiveStory;
