import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader, Icon } from "../../views/shared";
import { AddStorySidebar } from "../../views/add-story-sidebar";
import { StoryPreview } from "../../views/story-preview";

import { fetchStoryBackgrounds } from "../../redux/add-story/story-background/storyBackgroundAction";

import { useDropdown } from "../../hooks";

import { PageWithSidebarStyle } from "../../styles";

import { SidebarFilled } from "../../assets";

const StoryPage = () => {
	const dispatch = useDispatch();

	const { isStoryBackgroundsLoaded } = useSelector(
		(state) => state.storyBackgroundReducer
	);

	React.useEffect(() => {
		dispatch(fetchStoryBackgrounds());
	}, []);

	const absoluteSidebarBreakingPoint = 1000;
	const convertUnitToViewWidthBreakingPoint = 600;
	const responsiveAddStorySidebarTriggerID =
		"responsive-add-story-sidebar-trigger";
	const responsiveAddStorySidebarID = "responsive-add-story-sidebar";

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		responsiveAddStorySidebarTriggerID,
		responsiveAddStorySidebarID,
		false
	);

	return (
		<PageWithSidebarStyle
			id="add-story-page"
			absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
		>
			{isStoryBackgroundsLoaded ? (
				<React.Fragment>
					<AddStorySidebar
						isResponsiveAddStorySidebarOpen={isDropdownMenuOpen}
						setisResponsiveAddStorySidebarOpen={setIsDropdownMenuOpen}
						addStorySidebarID={responsiveAddStorySidebarID}
						absoluteSidebarBreakingPoint={absoluteSidebarBreakingPoint}
					/>

					<StoryPreview
						convertUnitToViewWidthBreakingPoint={
							convertUnitToViewWidthBreakingPoint
						}
					/>

					<Icon
						iconRole="button"
						iconType="button"
						iconID={responsiveAddStorySidebarTriggerID}
						// iconElementStyleObject={{
						// 	elementPadding: "1rem",
						// 	elementWidth: "fit-content",
						// 	elementHeight: "fit-content",
						// }}
					>
						<SidebarFilled />
					</Icon>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</PageWithSidebarStyle>
	);
};

export default StoryPage;
