import * as React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { StorySidebar } from "../../views/story-sidebar";
import { ActiveStory } from "../../views/active-story";
import { IconElement } from "../../views/shared";

import { fetchCurrentUserStories } from "../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";
import {
	setSelectedUserStoriesIndex,
	setActiveUserStoryIndex,
} from "../../redux/story/story-viewership/storyViewershipAction";

import { useDropdown } from "../../hooks";

import { fetchToken } from "../../utils";

import { PageWithSidebarStyle } from "../../styles";

import { SidebarFilled } from "../../assets";

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

	// TODO
	const addStoryView = async () => {
		const token = fetchToken();

		await axios({
			method: "POST",
			url: `http://localhost:8080/story/view/${storyID}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};

	React.useEffect(() => {
		addStoryView();
	}, [storyID]);

	// TODO

	return (
		<PageWithSidebarStyle
			id="story-page"
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			<StorySidebar
				isResponsiveStorySidebarOpen={isDropdownMenuOpen}
				setisResponsiveStorySidebarOpen={setIsDropdownMenuOpen}
				storySidebarID={responsiveStorySidebarID}
				absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
			/>

			{homeFeedStoriesArray && (
				<ActiveStory
					convertUnitToViewWidthBreakingPoint={
						convertUnitToViewWidthBreakingPoint
					}
				/>
			)}

			<IconElement
				iconRole="button"
				iconID={responsiveStorySidebarTriggerID}
				iconElementStyleObject={{
					elementPadding: "1rem",
					elementWidth: "fit-content",
					elementHeight: "fit-content",
				}}
			>
				<SidebarFilled />
			</IconElement>
		</PageWithSidebarStyle>
	);
};

export default StoryPage;
