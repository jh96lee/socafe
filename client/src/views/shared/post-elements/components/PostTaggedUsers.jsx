import * as React from "react";

import { DropdownMenu } from "../../index";

import { useDropdown } from "../../../../hooks";

import {
	PostTaggedUsersStyle,
	PostTaggedUsersIconElementStyle,
} from "../styles/PostTaggedUsersStyle";

import { MultipleUsers } from "../../../../assets";

const PostTaggedUsers = ({ postTaggedUsersArray }) => {
	const { isDropdownMenuOpen } = useDropdown(
		"post-tagged-users-dropdown-trigger",
		"post-tagged-users-dropdown-menu"
	);

	const dropdownElementsArray = postTaggedUsersArray.map((user) => {
		return {
			content: user,
			onClickEventHandler: null,
		};
	});

	return (
		postTaggedUsersArray.length !== 0 && (
			<PostTaggedUsersStyle id="post-tagged-users-dropdown-trigger">
				<PostTaggedUsersIconElementStyle>
					<MultipleUsers />
				</PostTaggedUsersIconElementStyle>

				{isDropdownMenuOpen && (
					<DropdownMenu
						dropdownMenuID="post-tagged-users-dropdown-menu"
						dropdownElementsArray={dropdownElementsArray}
						dropdownMenuStyleObject={{
							menuBottom: "-1rem",
							menuLeft: "-1rem",
							menuWidth: "20rem",
						}}
					/>
				)}
			</PostTaggedUsersStyle>
		)
	);
};

export default PostTaggedUsers;
