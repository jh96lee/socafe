import * as React from "react";

import { DropdownMenu } from "../../index";

import {
	PostTaggedUsersDropdownStyle,
	PostTaggedUsersIconElementStyle,
} from "../styles/PostTaggedUsersStyle";

import { MultipleUsers } from "../../../../assets";

const PostTaggedUsers = ({
	postTaggedUsersArray,
	conditionalPostTaggedUsersVariable,
}) => {
	const postTaggedUsersDropdownElementArray = () => {
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
		<PostTaggedUsersDropdownStyle id="post-tagged-users-dropdown-trigger">
			<PostTaggedUsersIconElementStyle>
				<MultipleUsers />
			</PostTaggedUsersIconElementStyle>

			<DropdownMenu
				triggerID="post-tagged-users-dropdown-trigger"
				dropdownElementKey="post-tagged-user"
				dropdownElementArray={postTaggedUsersDropdownElementArray()}
				menuBottom="-1rem"
				menuLeft="-1rem"
				menuWidth="20rem"
			/>
		</PostTaggedUsersDropdownStyle>
	) : null;
};

export default PostTaggedUsers;
