import * as React from "react";
import { useSelector } from "react-redux";

import { DropdownMenu, DropdownElement } from "../../shared";

import {
	PostTaggedUserDropdownStyle,
	PostTaggedUserIconStyle,
} from "../styles/PostTaggedUserDropdownStyle";

import { MultipleUsers } from "../../../assets";

const PostTaggedUser = () => {
	const { taggedPostUsersArray } = useSelector((state) => state.addPostReducer);

	return taggedPostUsersArray.length === 0 ? null : (
		<PostTaggedUserDropdownStyle id="post-tagged-user-dropdown-trigger">
			<PostTaggedUserIconStyle>
				<MultipleUsers />
			</PostTaggedUserIconStyle>

			<DropdownMenu
				triggerID={`post-tagged-user-dropdown-trigger`}
				customDropdownId={`post-tagged-user`}
				dataArray={taggedPostUsersArray}
				menuBottom="0"
				menuLeft="0"
				menuWidth="20rem"
			>
				{taggedPostUsersArray.map((user, idx) => {
					return (
						<DropdownElement
							key={`tagged-post-user__${idx}`}
							dropdownElementContent={user}
							dropdownElementComponentType="user"
						/>
					);
				})}
			</DropdownMenu>
		</PostTaggedUserDropdownStyle>
	);
};

export default PostTaggedUser;
