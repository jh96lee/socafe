import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { StorySidebar } from "../../views/story-sidebar";
import { ActiveStory } from "../../views/active-story";
import { Loader, Icon } from "../../views/shared";

import { fetchCurrentUserStories } from "../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";
import {
	setSelectedUserStoriesIndex,
	setActiveUserStoryIndex,
} from "../../redux/story/story-viewership/storyViewershipAction";

import { useDropdown } from "../../hooks";

import { addStoryViewRequest } from "../../utils";

import { PageWithSidebarStyle } from "../../styles";

import { SidebarFilled } from "../../assets";

const StoryPage = () => {
	const dispatch = useDispatch();

	const { isHomeFeedStoriesLoaded, homeFeedStories } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const userID = parseInt(useParams().userID);
	const storyID = parseInt(useParams().storyID);

	// TODO: UI setting values
	const absoluteSidebarBreakingPoint = 1000;
	const convertUnitToViewWidthBreakingPoint = 600;
	const responsiveStorySidebarTriggerID = "responsive-story-sidebar-trigger";
	const responsiveStorySidebarID = "responsive-story-sidebar";

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		responsiveStorySidebarTriggerID,
		responsiveStorySidebarID,
		false,
		true
	);
	// TODO: UI setting values

	React.useEffect(() => {
		if (homeFeedStories.length === 0) {
			dispatch(fetchCurrentUserStories(userID));
		}

		if (homeFeedStories.length > 0) {
			const storyOwnerIDsArray = homeFeedStories.map(
				(story) => story.storyOwner.id
			);

			if (!storyOwnerIDsArray.includes(userID)) {
				dispatch(fetchCurrentUserStories(userID));
			}
		}
	}, [userID]);

	// REVIEW: page component will set the userStoriesIndex and activeStoryIndex
	React.useEffect(() => {
		if (homeFeedStories && homeFeedStories.length > 0) {
			const storyOwnerIDsArray = homeFeedStories.map(
				(story) => story.storyOwner.id
			);

			if (storyOwnerIDsArray.includes(userID)) {
				const currentUserStoriesIndex = storyOwnerIDsArray.indexOf(userID);

				const { storyIDsArray } = homeFeedStories[currentUserStoriesIndex];

				const currentStoryIndex = storyIDsArray.indexOf(storyID);

				dispatch(setSelectedUserStoriesIndex(currentUserStoriesIndex));
				dispatch(setActiveUserStoryIndex(currentStoryIndex));
			}
		}
	}, [homeFeedStories, userID, storyID]);

	React.useEffect(() => {
		addStoryViewRequest();
	}, [storyID]);

	// FIX: fix ui
	return (
		<PageWithSidebarStyle
			id="story-page"
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			{homeFeedStories === null ? (
				<h1
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "var(--char-default)",
						width: "100%",
						height: "100%",
						textAlign: "center",
					}}
				>
					User not found
				</h1>
			) : homeFeedStories.length > 0 && isHomeFeedStoriesLoaded ? (
				<React.Fragment>
					<StorySidebar
						isResponsiveStorySidebarOpen={isDropdownMenuOpen}
						setisResponsiveStorySidebarOpen={setIsDropdownMenuOpen}
						storySidebarID={responsiveStorySidebarID}
						absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
					/>

					<ActiveStory
						convertUnitToViewWidthBreakingPoint={
							convertUnitToViewWidthBreakingPoint
						}
					/>

					<Icon iconRole="button" iconID={responsiveStorySidebarTriggerID}>
						<SidebarFilled />
					</Icon>
				</React.Fragment>
			) : (
				<Loader />
			)}
			<React.Fragment></React.Fragment>
		</PageWithSidebarStyle>
	);
};

export default StoryPage;
