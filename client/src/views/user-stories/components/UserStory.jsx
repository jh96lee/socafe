import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { Story } from "../../story";
import { IconElement, DropdownMenu } from "../../shared";

import { removeUserStory } from "../../../redux/user-stories/userStoriesAction";

import { useDropdown } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import {
	UserStoryStyle,
	UserStoryWrapperStyle,
} from "../styles/UserStoryStyle";

import { More, TrashOutline } from "../../../assets";
import { setSelectedUserStoryIndex } from "../../../redux/user-stories/userStoriesAction";

const UserStory = ({ story, storyIdx }) => {
	const dispatch = useDispatch();

	const handleStoryOnClick = () => {
		dispatch(setSelectedUserStoryIndex(storyIdx));
	};

	const { isDropdownMenuOpen } = useDropdown(
		`user-story-more-dropdown-trigger__${storyIdx}`,
		`user-story-more-dropdown-menu__${storyIdx}`,
		true
	);

	const dropdownElementsArray = [
		{
			content: {
				icon: <TrashOutline />,
				label: "Delete",
			},
			onClickEventHandler: async () => {
				const token = fetchToken();

				const { data } = await axios({
					method: "DELETE",
					url: `http://localhost:8080/story/${story.id}`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const { success } = data;

				if (success) {
					dispatch(removeUserStory(story.id));
				}
			},
		},
	];

	return (
		<UserStoryStyle>
			<UserStoryWrapperStyle id="user-story-trigger">
				<Story
					story={story}
					convertUnitToViewWidthBreakingPoint={null}
					storyParentHeightProp={400}
					storyOnClick={handleStoryOnClick}
				/>
			</UserStoryWrapperStyle>

			<IconElement
				iconID={`user-story-more-dropdown-trigger__${storyIdx}`}
				iconRole="button"
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "0.6rem",
					elementRight: "0.6rem",
					elementPadding: "0rem",
					elementZIndex: "10",
					iconColor: "var(--char-default)",
				}}
			>
				<More />
			</IconElement>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID={`user-story-more-dropdown-menu__${storyIdx}`}
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "0",
						menuRight: "0",
						menuWidth: "",
					}}
				/>
			)}
		</UserStoryStyle>
	);
};

export default UserStory;
