import * as React from "react";
import { useSelector } from "react-redux";

import { DropdownMenu } from "../../shared";

import {
	PostTaggedUserDropdownStyle,
	PostTaggedUserIconStyle,
} from "../styles/PostTaggedUserDropdownStyle";

import { MultipleUsers } from "../../../assets";

const PostTaggedUser = () => {
	const { taggedPostUsersArray } = useSelector((state) => state.addPostReducer);

	const postTaggedUsersDropdownElementArray = () => {
		return taggedPostUsersArray.map((user) => {
			return {
				content: user,
				type: "user",
				onClickEventHandler: null,
			};
		});
	};

	return taggedPostUsersArray.length === 0 ? null : (
		<PostTaggedUserDropdownStyle id="post-tagged-user-dropdown-trigger">
			<PostTaggedUserIconStyle>
				<MultipleUsers />
			</PostTaggedUserIconStyle>

			<DropdownMenu
				triggerID="post-tagged-user-dropdown-trigger"
				dropdownElementKey="post-tagged-user"
				dropdownElementArray={postTaggedUsersDropdownElementArray()}
				menuBottom="0"
				menuLeft="0"
				menuWidth="20rem"
			/>
		</PostTaggedUserDropdownStyle>
	);
};

export default PostTaggedUser;
