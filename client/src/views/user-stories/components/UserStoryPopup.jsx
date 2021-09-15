import * as React from "react";
import { useSelector } from "react-redux";

import { Story } from "../../story";
import { IconElement } from "../../shared";

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

			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "2.5rem",
					elementRight: "2.5rem",
					elementPadding: "0.6rem",
					elementBackgroundColor: "#0000007d",
					iconColor: "var(--char-default)",
				}}
				onClick={() => setIsDropdownMenuOpen(false)}
			>
				<Remove />
			</IconElement>
		</UserStoryPopupStyle>
	);
};

export default UserStoryPopup;
