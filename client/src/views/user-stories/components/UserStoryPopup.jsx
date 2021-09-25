import * as React from "react";
import { useSelector } from "react-redux";

import { Story } from "../../story";
import { Icon } from "../../shared";

import { UserStoryPopupStyle } from "../styles/UserStoryPopupStyle";

import { Remove } from "../../../assets";

const UserStoryPopup = ({ setIsDropdownMenuOpen }) => {
	const { userStoriesArray, selectedUserStoryIndex } = useSelector(
		(state) => state.userStoriesReducer
	);

	return (
		<UserStoryPopupStyle id="user-story-popup">
			<Story
				story={userStoriesArray[selectedUserStoryIndex]}
				convertUnitToViewWidthBreakingPoint={600}
				storyParentHeightProp={document.querySelector("html").clientHeight}
			/>

			<Icon
				iconRole="button"
				iconType="overlay"
				iconStyleObject={{
					iconPosition: "absolute",
					iconTop: "2.5rem",
					iconRight: "2.5rem",
				}}
				onClick={() => setIsDropdownMenuOpen(false)}
			>
				<Remove />
			</Icon>
		</UserStoryPopupStyle>
	);
};

export default UserStoryPopup;
