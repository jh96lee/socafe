import * as React from "react";

import { DropdownMenu } from "../../index";

import { useDropdown } from "../../../../hooks/useDropdown";

import {
	PostTaggedUsersStyle,
	PostTaggedUsersIconElementStyle,
} from "../styles/PostTaggedUsersStyle";

import { MultipleUsers } from "../../../../assets";

const PostTaggedUsers = ({
	postTaggedUsersArray,
	conditionalPostTaggedUsersVariable,
}) => {
	const { isDropdownMenuOpen } = useDropdown(
		"post-tagged-users-dropdown-trigger",
		"post-tagged-users-dropdown-menu"
	);

	const postTaggedUsersArrayCreator = () => {
		return postTaggedUsersArray.map((user) => {
			return {
				content: user,
				type: "user",
				onClickEventHandler: null,
			};
		});
	};

	return conditionalPostTaggedUsersVariable &&
		postTaggedUsersArray.length !== 0 ? (
		<PostTaggedUsersStyle id="post-tagged-users-dropdown-trigger">
			<PostTaggedUsersIconElementStyle>
				<MultipleUsers />
			</PostTaggedUsersIconElementStyle>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="post-tagged-users-dropdown-menu"
					dropdownElementKey="post-tagged-users-dropdown-element"
					dropdownElementArray={postTaggedUsersArrayCreator()}
					dropdownMenuStyleObject={{
						menuBottom: "-1rem",
						menuLeft: "-1rem",
						menuWidth: "20rem",
					}}
				/>
			)}
		</PostTaggedUsersStyle>
	) : null;
};

export default PostTaggedUsers;
