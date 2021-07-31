import * as React from "react";

import { IconElement } from "../../index";

import { DropdownMenu } from "../../index";

import { useDropdown } from "../../../../hooks";

import { PostTaggedUsersStyle } from "../styles/PostTaggedUsersStyle";

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
				<IconElement
					iconRole="button"
					iconElementStyleObject={{
						elementBackgroundColor: "#0000004a",
						iconColor: "#fff",
						iconSize: "2.5rem",
					}}
				>
					<MultipleUsers />
				</IconElement>

				{isDropdownMenuOpen && (
					<DropdownMenu
						dropdownMenuID="post-tagged-users-dropdown-menu"
						dropdownElementsArray={dropdownElementsArray}
						dropdownMenuStyleObject={{
							menuBottom: "-1.5rem",
							menuLeft: "-1.5rem",
							menuWidth: "25rem",
						}}
					/>
				)}
			</PostTaggedUsersStyle>
		)
	);
};

export default PostTaggedUsers;
