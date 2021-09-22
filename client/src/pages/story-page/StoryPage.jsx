import * as React from "react";
import axios from "axios";
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

import { fetchToken, addStoryView } from "../../utils";

import { PageWithSidebarStyle } from "../../styles";

import { SidebarFilled } from "../../assets";

const StoryPage = () => {
	const dispatch = useDispatch();

	const { isHomeFeedStoriesLoaded, homeFeedStories } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { selectedUserStoriesIndex } = useSelector(
		(state) => state.storyViewershipReducer
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
	}, []);

	React.useEffect(() => {
		if (homeFeedStories && homeFeedStories.length > 0) {
			const storyOwnerIDsArray = homeFeedStories.map(({ storyOwner }) => {
				return storyOwner.id;
			});

			const currentUserStoriesIndex = storyOwnerIDsArray.indexOf(userID);

			const { storyIDsArray } = homeFeedStories[currentUserStoriesIndex];

			const currentStoryIndex = storyIDsArray.indexOf(storyID);

			dispatch(setSelectedUserStoriesIndex(currentUserStoriesIndex));
			dispatch(setActiveUserStoryIndex(currentStoryIndex));
		}
	}, [homeFeedStories, userID, storyID]);

	// FIX
	return homeFeedStories === null ? (
		<h1>Story not found</h1>
	) : (
		<PageWithSidebarStyle
			id="story-page"
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			<div />
			{/* <StorySidebar
				isResponsiveStorySidebarOpen={isDropdownMenuOpen}
				setisResponsiveStorySidebarOpen={setIsDropdownMenuOpen}
				storySidebarID={responsiveStorySidebarID}
				absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
			/> */}

			{homeFeedStories.length > 0 && isHomeFeedStoriesLoaded ? (
				<ActiveStory
					convertUnitToViewWidthBreakingPoint={
						convertUnitToViewWidthBreakingPoint
					}
				/>
			) : (
				<Loader />
			)}

			<div />
			{/* <Icon
				iconRole="button"
				iconID={responsiveStorySidebarTriggerID}
				iconElementStyleObject={{
					elementPadding: "1rem",
					elementWidth: "fit-content",
					elementHeight: "fit-content",
				}}
			>
				<SidebarFilled />
			</Icon> */}
		</PageWithSidebarStyle>
	);
};

export default StoryPage;

// TODO
// const addStoryView = async () => {
// 	const token = fetchToken();

// 	await axios({
// 		method: "POST",
// 		url: `http://localhost:8080/story/view/${storyID}`,
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 	});
// };

// React.useEffect(() => {
// 	addStoryView();
// }, [storyID]);

// TODO
